import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import "./Timeline.css";
// import { Posts } from "../../dummyData";
import axios from "axios";



export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username 
      ? await axios.get(`/posts/profile/${username}`) 
      : await axios.get("/posts/timeline/63407aa4b6442ecb0cd1d36a");
      // console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);
  
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
