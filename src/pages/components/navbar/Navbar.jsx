import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ChatIcon from '@mui/icons-material/Chat';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatIcon className="icon"/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon"/>
          </div>
          <div className="item">
           <img src="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg" alt="profile" className="profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar