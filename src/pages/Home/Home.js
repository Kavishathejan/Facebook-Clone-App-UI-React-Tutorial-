import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import LeftPane from '../../components/LeftPane/LeftPane'
import RightPane from '../../components/RightPane/RightPane'
import PostPane from '../../components/PostPane/PostPane'
import "./home.css"



export default function Home() {
  return (
    <><Navbar/>
    <div className="bottomContainer">
      <LeftPane/>
      <PostPane/>
      <RightPane/>
      
    </div>
    </>
    
  )
}
