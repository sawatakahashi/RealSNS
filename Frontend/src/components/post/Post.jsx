import React, { useEffect, useState }from 'react';
import "./Post.css";
// import { Users } from "../../dummyData";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios"; 
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "../../state/AuthContext";


export default function Post({ post }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({}); //投稿したユーザーのユーザーID

    const {user: currentUser} = useContext(AuthContext);//ログインしているユーザーID
    
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?userId=${post.userId}`);
            // console.log(response.data);
            setUser(response.data);
        };
        fetchUser();
    }, [post.userId]);


    const handleLike = async () => {
        try {
            //いいねのAPIを叩いていく
            await axios.put(`/posts/${post._id}/like`,{userId: currentUser._id});
        } catch (err){
            console.log(err);
        }

        setLike(isLiked ? like -1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <Link to={`/profile/${user.username}`} >
                <img 
                src={user.profilePicture 
                    ? PUBLIC_FOLDER + user.profilePicture 
                    : PUBLIC_FOLDER + "/person/noface.jpeg"}
                alt="" 
                className='postProfileIMG' 
                />
                </Link>
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
