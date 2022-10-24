import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';
import "./Sidebar.css";
import Closefriend from '../closefriend/Closefriend';
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";




export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <HomeIcon className='sidebarIcon' />
            <Link to="/" style={{ textDecoration: "none", color:"black" }}>
              <spn className="sidebarListItemtext">ホーム</spn>
            </Link>
          </li>
          <li className='sidebarListItem'>
            <SearchIcon className='sidebarIcon' />
            <spn className="sidebarListItemtext">検索</spn>
          </li>
          <li className='sidebarListItem'>
            <NotificationsIcon className='sidebarIcon' />
            <spn className="sidebarListItemtext">通知</spn>
          </li>
          <li className='sidebarListItem'>
            <MessageIcon className='sidebarIcon' />
            <spn className="sidebarListItemtext">メッセージ</spn>
          </li>
          <li className='sidebarListItem'>
            <BookmarkIcon className='sidebarIcon' />
            <spn className="sidebarListItemtext">ブックマーク</spn>
          </li>
          <li className='sidebarListItem'>
            <PersonIcon className='sidebarIcon' />
            <Link to="/profile/ぽんた" style={{ textDecoration: "none", color:"black" }}>
              <spn className="sidebarListItemtext">プロフィール</spn>
            </Link>
          </li>
          <li className='sidebarListItem'>
            <SettingsIcon className='sidebarIcon' />
            <spn className="sidebarListItemtext">設定</spn>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <Closefriend user={user} key={user.id}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
 