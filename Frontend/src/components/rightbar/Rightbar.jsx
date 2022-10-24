import React from 'react';
import Online from '../online/Online';
import "./Rightbar.css";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
      <div className="eventContainer">
        <img src="/assets/Heart/star.png" alt="" className='starIMG'/>
        <span className='eventText'>
          <b>フォロワー限定</b>イベント開催中！
        </span>
      </div>
      <img src="/assets/Heart/event.jpeg" alt="" className='eventIMG'/>
      <h4 className='rightbarTitle'>Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map( (user) => (
        <Online user={user} key={user.id} />
        ))}
      </ul>
      <p className="promotionTitle">Advertising</p>
      <img src="/assets/promotion/luckybepo.png" alt="" className='rightbarPromotionIMG'/>
      <p className="promotionName">Lucky Bepo Ramen</p>
          
      <img src="/assets/promotion/nike.jpeg" alt="" className='rightbarPromotionIMG'/>
      <p className="promotionName">Shopping</p>
          
      <img src="/assets/promotion/travel.jpeg" alt="" className='rightbarPromotionIMG'/>
      <p className="promotionName">Traveling</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>ユーザー情報</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">出身:</span>
          <span className="rightbarInfoKey">福岡:</span>
        </div>
        <h4 className="rightbarTitle">あなたの友達</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img 
            src={ PUBLIC_FOLDER + "/person/Jaden.png" } 
            alt="" 
            className='rightbarFollowingIMG'/>
            <span className="rightbarFollowingName">Jaden Maier</span>
          </div>
          <div className="rightbarFollowing">
            <img 
            src={ PUBLIC_FOLDER + "/person/Bepo.png" } 
            alt="" 
            className='rightbarFollowingIMG'/>
            <span className="rightbarFollowingName">ベポ みかん</span>
          </div>
          <div className="rightbarFollowing">
            <img src=
            { PUBLIC_FOLDER + "/person/Sawa.png" } 
            alt=""  
            className='rightbarFollowingIMG'/>
            <span className="rightbarFollowingName">高橋 佐和</span>
          </div>
          <div className="rightbarFollowing">
            <img 
            src={ PUBLIC_FOLDER + "/person/papa.png" } 
            alt="" 
            className='rightbarFollowingIMG'/>
            <span className="rightbarFollowingName">高橋 真一</span>
          </div>
        </div>
      </div>
      </>
    );
  };

  return <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>

}
