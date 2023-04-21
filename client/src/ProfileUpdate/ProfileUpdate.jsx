import { useState } from 'react'
import './ProfileUpdate.css'
import axios from 'axios'


const ProfileUpdate = () => {
    const [close, setClose] = useState(false)

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(formData)

        try {

            const response = await axios.post('http://localhost:5050/api/user/login', formData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`${close ? 'hidden wrapper' : 'wrapper'}`}>
            <div className="top">
                <h3>Profile Update</h3>
                <img src="./x-symbol.png" alt="" width={"20px"} onClick={() => setClose(true)} className='close' />
            </div>

            <div className="update">
                <div className="avatar">
                    <img src="./avatar.png" alt="avatar" width={'200px'}/>
                </div>

                <form onSubmit={handleSubmit} className='updateForm'>

                    <div className="field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} placeholder='First Name' />
                    </div>
                    <div className="field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder='Last Name' />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone' />
                    </div>



                </form>
            </div>

            <div className="buttons">
                        <button className='cancel_button'>Cancel</button>
                        <button type="submit" className='update_button'>Update</button>
                    </div>

        </div>
    )
}

export default ProfileUpdate