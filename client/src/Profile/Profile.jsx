import React from 'react'
import MyCalendar from '../Calander/MyCalander'
import './Profile.css'

const Profile = () => {
    const data = [
        {
            name: 'Linkedin',
            img: './linkedin.svg'
        },
        {
            name: 'Github',
            img: './github.svg'
        },
        {
            name: 'Twitter',
            img: './twitter.svg'
        },
        {
            name: 'Instagram',
            img: './instagram.svg'
        },
        {
            name: 'Facebook',
            img: './facebook.svg'
        },
        {
            name: "Website",
            img: './web.svg'
        }
    ]
    
    return (
        <div className='profile'>
            <div className="overview">
                <div className="overview_left">
                    <img src="./avatar.png" alt="" width="80px" />
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

            {/* about */}
            <div className="profile_field">
                <div className="head">
                    <div className="head_left">About Me</div>
                    <button className="button head_right">Save</button>
                </div>
                <textarea className="about_text" placeholder='Add Something about you'>

                </textarea>
            </div>

            <hr /> {/* ---- */}

            {/* cipher map */}
            <div className="profile_field">
                <div className="head">
                    <div className="head_left">cipher map</div>
                    {/* <button className="button head_right">Save</button> */}
                </div>
                <MyCalendar />
            </div>

            <hr /> {/* ---- */}

            {/*  online links */}
            <div className="profile_field">
                <div className="head">
                    <div className="head_left">on the web</div>
                    <button className="button head_right">Save</button>
                </div>


                <div className='links_wrapper'>

                    {data.map(({ name, img }) => (
                        <div className="link_field">
                            <label htmlFor="">{name}</label>
                            <div className='link_edit'>
                                <img src={img} alt="" width="40px" />
                                <input type="text" placeholder={name} className='link_input' />
                                <img src="./edit.svg" alt="" width={'20px'} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <hr /> {/* ---- */}

            {/* Professional info */}
            <div className="profile_field">
                <div className="head">
                    <div className="head_left">professional information</div>
                    <button className="button head_right">Save</button>
                </div>

                <div className='pro_info'>
                    <div>
                        <label htmlFor="">Highest Education</label>
                        <div className='link_edit'>
                            <input type="text" className='link_input' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">What do you do currently?</label>
                        <div className='link_edit'>
                            <input type="text" className='link_input' />
                        </div>
                    </div>


                </div>
            </div>

            <hr /> {/* ---- */}

            {/* Password and security */}
            <div className="profile_field">
                <div className="head">
                    <div className="head_left">Password & Security</div>
                    <button className="button head_right">Change</button>
                </div>

                <div className=''>
                    <div>
                        <label htmlFor="">Password</label>
                        <div className=''>
                            <input type="text" className='link_input' />
                        </div>
                    </div>

                </div>
            </div>

            <hr /> {/* ---- */}

            {/* interests */}
            <div className="profile_field">
                <div className="head">
                    <div className="head_left">Interests</div>
                    <button className="button head_right">Edit</button>
                </div>
            </div>

        </div>
    )
}

export default Profile