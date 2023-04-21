import React from 'react'
import MyCalendar from '../Calander/MyCalander'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="overview">
            <div className="overview_left">
                    <img src="./avatar.png" alt="" width="80px"/>
                <div className="about">
                    <p className='hello'>Hello,</p>
                    <p className='user_name'>Arjun Shamra</p>
                    <p className='mail'>arjunsharma@gmial.com</p>
                </div>
            </div>
            <div className="overview_right">
                0 Followers
            </div>
        </div>

        <div className="profile_field">
            <div className="head">
                <div className="head_left">About Me</div>
                <button className="button head_right">Save</button>
            </div>
            <textarea className="about_text" placeholder='Add Something about you'>

            </textarea>
        </div>

        <hr />


        <div className="profile_field">
            <div className="head">
                <div className="head_left">ciper map</div>
                {/* <button className="button head_right">Save</button> */}
            </div>
            <MyCalendar />
        </div>

        <hr />

        <div className="profile_field">
            <div className="head">
                <div className="head_left">on the web</div>
                <button className="button head_right">Save</button>
            </div>
            
        </div>

        
    </div>
  )
}

export default Profile