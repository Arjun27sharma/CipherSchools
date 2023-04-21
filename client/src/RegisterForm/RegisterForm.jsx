import React, { useState } from 'react';
import axios from 'axios';
import "./RegisterForm.css"

function RegisterForm() {
  const [close ,setClose] = useState(false)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
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
        
      const response = await axios.post('http://localhost:5050/api/user/new', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className={`${close ? 'hidden wrapper' : 'wrapper'}`}>

    <div className="registerFormHeader">
      <div className="top">
        <h2>Signup</h2>
        <img src="./x-symbol.png" alt="" width={"20px"} onClick={() => setClose(true)} className='close'/>
      </div>

      <div className="bottom">
        <div className="brand">
          <div className="logo"><img src="./logo.png" alt="" width={'50px'}/></div>
          <div className="name">CipherSchools</div>
        </div>
        <div className="formHead">
          <p>Create New Account</p>
        </div>
        <div className="formDesc">
          <p>Please provide your valid informations to signup</p>
        </div>
      </div>
    </div>
    
    <form onSubmit={handleSubmit} className='registerForm'>

      <div className="field">
        {/* <label htmlFor="firstname">First Name:</label> */}
        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} placeholder='First Name'/>
      </div>

      <div className="field">
        {/* <label htmlFor="lastname">Last Name:</label> */}
        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder='Last Name'/>
      </div>

      <div className="field">
        {/* <label htmlFor="email">Email:</label> */}
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email'/>
      </div>

      <div className="field">
        {/* <label htmlFor="password">Password:</label> */}
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}  placeholder='Password'/>
      </div>


      <button type="submit" className='button'>Register</button>
    </form>

    <div className="registerFormFooter">

      <div className="or_line">
        <div className='line'></div>
        <p>OR</p>
        <div className='line'></div>
      </div>

      <div className="login">
        <p>Already have an account?</p>
        <a href="/login">Login</a>
      </div>


    </div>


    <div className="google">
        <img src="./google.png" alt="" width={"25px"}/>
        <p>Sign in with Google</p>
    </div>

    </div>
  );
}

export default RegisterForm;
