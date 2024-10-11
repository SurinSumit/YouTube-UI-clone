import React, { useState } from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import {Link} from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuSharpIcon />
        <Link to="/">
        <img 
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_of_YouTube_%282013-2015%29.svg" 
          alt=""
        />
        </Link>
      </div>

      <div className="header_input">
        <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallSharpIcon className="header_icon" />
        <AppsSharpIcon className="header_icon"/>
        <NotificationsSharpIcon className="header_icon"/>
        <AccountCircleSharpIcon />
      </div>
       
    </div>
  )
}

export default Header