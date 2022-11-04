import React, { useContext, useRef, useState } from 'react';
import "./Share.css";
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { AuthContext } from '../../state/AuthContext';
import axios from 'axios';

export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();

  const [file, setFile] = useState(null);
  console.log(file);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      await axios.post("/posts", newPost);
      window.location.reload(); //投稿した時に自分でリロードしなくて済む
    } catch(err){
      console.log(err);
    }
  };

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={
              user.profilePicture 
              ? PUBLIC_FOLDER + user.profilePicture 
              : PUBLIC_FOLDER + "/person/noface.jpeg"}
            className='shareProfileIMG' />
            <input t
            ype="text" 
            className="shareInput" 
            placeholder='つぶやく'
            ref={desc}/>
        </div>
        <hr className="shareHr" />

        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
            <div className="shareOptions">
                <label className="shareOption" htmlFor='file'>
                    <ImageIcon className="shareIcon" htmlColor='blue'/>
                    <span className="shareOptionText">写真</span>
                    <input 
                    type="file" 
                    id="file" 
                    accept='.png, .jpeg, .jpg' 
                    style={{display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}/>
                </label>
                <div className="shareOption">
                    <GifIcon className="shareIcon" htmlColor='hotpink'/>
                    <span className="shareOptionText">GIF</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon className="shareIcon" htmlColor='green' />
                    <span className="shareOptionText">気持ち</span>
                </div>
                <div className="shareOption">
                    <AnalyticsIcon className="shareIcon" htmlColor='red' />
                    <span className="shareOptionText">投票</span>
                </div>
            </div>
            <button className="shareButton" type="submit">投稿</button>
        </form>
      </div>
    </div>
  );
}
