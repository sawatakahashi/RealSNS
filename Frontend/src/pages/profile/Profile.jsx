import React from 'react';
import "./Profile.css";
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Topbar from '../../components/topbar/Topbar';

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
    <Topbar /> 
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src={PUBLIC_FOLDER + "/post/napping.jpeg" }
                alt="" 
                className='profileCoverIMG' />
                <img src={PUBLIC_FOLDER +"/person/IMG_5976.png"}
                alt="" 
                className='profileUserIMG' />
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>sawa</h4>
                <span className="profileInfoDesc">日本人です</span>
            </div>
        </div>
            <div className="profileRightBottom">
                <Timeline username="sawa" />
                <Rightbar profile />
            </div>
        </div>
    </div>
    </>
  );
}
