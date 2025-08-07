import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navbar.css"



export default function Navbar() {
    return (
        <div className="navBarBox">
            <div className="navBarLeft">
                <span className="logo">fakebook</span>
            </div>
            <div className="navBarCenter">
                <div className="searchBarBox">
                    <SearchIcon classname="searchIcon" />
                    <input placeholder='Search....' className="searchInput" />
                </div>
            </div>

            <div className="navBarRight">
                <div className="navBarLinks">
                    <div className="navBarLink">Homepage</div>
                    <div className="navBarLink">Profile</div>

                </div>
                <div className="navBarIcons">
                    <div className="navBarIcon">
                        <PersonIcon />
                        <span className="iconTag">4</span>
                    </div>
                    <div className="navBarIcon">
                        <MessageIcon />
                        <span className="iconTag">1</span>
                    </div>
                    <div className="navBarIcon">
                        <SettingsIcon />
                        <span className="iconTag">2</span>
                    </div>
                </div>
                <div className="pic">
                    <img src="/images/1.jpg" alt="" className="profilePicImage" />
                </div>
            </div>
        </div>
    )
}
