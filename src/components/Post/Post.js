import React from 'react'
import "./post.css"
export default function Post() {
    return (
        <div className='post'>
            <div className="postContainer">
                <div className="postTop">
                    <div className="postTopfirstRow">
                        <img src="/images/9.jpg" alt="" className='postImage' />
                        <div className="postUserName"> David Perera
                            <span className='postAdded'> added a new photo.</span>
                        </div>
                        
                        </div>

                    <div className="postTime">1 hour ago</div>
                </div>

                <div className="postCenter">
                    <div className="postcaption">
                            Evening Vibes
                    </div>
                    <img className='addedImage' src="/images/10.jpg" alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/images/like.png" alt="" className='postReaction'/>
                        <img src="/images/heart.png" alt="" className='postReaction' />
                        <img src="/images/wow.png" alt="" className='postReaction'/>
                        <span className="likeCount">Silva and 25 Others</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="commentCount">15 comments</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
