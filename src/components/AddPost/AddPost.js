import React from 'react'
import './addPost.css'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FilterIcon from '@mui/icons-material/Filter';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


export default function AddPost() {
  return (
    <div className="addPost">
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/1.jpg" alt="" className='addPostPic' />
                <input placeholder='What is in your mind...?' type="text"  className='addPostText'/>
            </div> <hr className='hrPost' />
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostBottomItem">
                        <OndemandVideoIcon className='liveVideo' />
                        <span className='addPostOptionText'>Live Video</span>
                    </div>
                    <div className="addPostBottomItem">
                        <FilterIcon  className='photoVideo'/>
                        <span className='addPostOptionText'>Photo / Video</span>
                    </div>
                    <div className="addPostBottomItem">
                        <SentimentVerySatisfiedIcon  className='feelingActivity'/>
                        <span className='addPostOptionText'>Feeling / Activity</span>
                    </div>
                </div>

            </div>

        </div>
    </div>)
}
