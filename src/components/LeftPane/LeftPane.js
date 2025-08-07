import React from 'react'
import './leftPane.css'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CakeIcon from '@mui/icons-material/Cake';

export default function leftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <GroupIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Groups</span>
          </li>
          <li className='leftPaneMenuItem'>
            <RssFeedIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>News Feed</span>
          </li>
          <li className='leftPaneMenuItem'>
            <FlagIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Pages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <CalendarMonthIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Events</span>
          </li>
          <li className='leftPaneMenuItem'>
            <BuildIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Tools</span>
          </li>
          <li className='leftPaneMenuItem'>
            <SportsEsportsIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Games</span>
          </li>
          <li className='leftPaneMenuItem'>
            <NewspaperIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>News</span>
          </li>
          <li className='leftPaneMenuItem'>
            <CakeIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Birthdays</span>
          </li>
          <li className='leftPaneMenuItem'>
            <WorkOutlineIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Marketplace</span>
          </li>
          <li className='leftPaneMenuItem'>
            <AddShoppingCartIcon className='leftPaneMenuIcon'/>
            <span className='leftPaneMenuText'>Cart</span>
          </li><br />
          <hr />
          <div className="pagesYouLiked">
            <h3> Pages You Liked </h3>
          </div>
          <li className="pageListItem">
            <img src="/images/2.jpg" alt="" className='pagePic' />
            <span className="pageName"> ICC </span>
          </li>
          <li className="pageListItem">
            <img src="/images/3.jpg" alt="" className='pagePic' />
            <span className="pageName"> Your Memes </span>
          </li>
          <li className="pageListItem">
            <img src="/images/4.jpg" alt="" className='pagePic' />
            <span className="pageName">Music </span>
          </li>
          <li className="pageListItem">
            <img src="/images/5.jpg" alt="" className='pagePic' />
            <span className="pageName"> Gym Life </span>
          </li>
          <li className="pageListItem">
            <img src="/images/6.jpg" alt="" className='pagePic' />
            <span className="pageName"> Game Arena </span>
          </li>
          <li className="pageListItem">
            <img src="/images/7.jpg" alt="" className='pagePic' />
            <span className="pageName"> Movies Club </span>
          </li>
          <li className="pageListItem">
            <img src="/images/8.jpg" alt="" className='pagePic' />
            <span className="pageName"> Cook With Me</span>
          </li>
          
          

          
        </div>
      </div>
    </div>
  )
}
