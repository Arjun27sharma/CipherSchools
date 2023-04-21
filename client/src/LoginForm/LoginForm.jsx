import React, { useState } from 'react';
import axios from 'axios';
import "./LoginForm.css"

function LoginForm() {

    const [close ,setClose] = useState(false)
  const [formData, setFormData] = useState({
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
        
      const response = await axios.post('http://localhost:5050/api/user/login', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className={`${close ? 'hidden wrapper' : 'wrapper'}`}>

    <div className="registerFormHeader">
      <div className="top">
        <h2>Signin</h2>
        <img src="./x-symbol.png" alt="" width={"20px"} onClick={() => setClose(true)} className='close'/>
      </div>

      <div className="bottom">
        <div className="brand">
          <div className="logo"><img src="./logo.png" alt="" width={'50px'}/></div>
          <div className="name">CipherSchools</div>
        </div>
        <div className="formHead">
          <p>Hey, Welcome!</p>
        </div>
        <div className="formDesc">
          <p>Please provide your email and password to signin</p>
        </div>
      </div>
    </div>
    
    <form onSubmit={handleSubmit} className='registerForm'>

      <div className="field">
        {/* <label htmlFor="email">Email:</label> */}
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email ID'/>
      </div>

      <div className="field">
        {/* <label htmlFor="password">Password:</label> */}
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}  placeholder='Password'/>
      </div>

      <div className="forgetPass">
        <p>Forgot Password?</p>
      </div>


      <button type="submit" className='button'>Signin</button>
    </form>

    <div className="registerFormFooter">



      <div className="signup">
        <p>Dont have an account?</p>
        <a href="/login">Get Started</a>
      </div>


      <div className="or_line">
        <div className='line'></div>
        <p>OR</p>
        <div className='line'></div>
      </div>
      

    </div>

    <div className="google">
        <img src="./google.png" alt="" width={"25px"}/>
        <p>Sign in with Google</p>
    </div>

    </div>
  );
}

export default LoginForm;
