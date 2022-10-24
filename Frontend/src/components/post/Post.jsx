import React, { useEffect, useState }from 'react';
import "./Post.css";
// import { Users } from "../../dummyData";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import { format } from 'timeago.js';


export default function Post({ post }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users/${post.userId}`);
            console.log(response.data);
            setUser(response.data);
        };
        fetchUser();
    }, []);
  

    const handleLike = () => {
        setLike(isLiked ? like -1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img 
                src={user.profilePicture || PUBLIC_FOLDER + "/person/noface.jpeg"}
                alt="" 
                className='postProfileIMG' 
                />
                <span className="postUsername">
                    {user.username}
                </span>
                <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={ PUBLIC_FOLDER + post.img} alt="" className='postIMG' />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img 
                src={ PUBLIC_FOLDER + "/Heart/likes.png" }
                alt="" 
                className='likeIcon'
                onClick={() => handleLike()}/>
                <span className="postLikeCounter">{like}人がいいねしました</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment}:コメント</span>
            </div>
        </div>
        
      </div>
    </div>
  );
}
