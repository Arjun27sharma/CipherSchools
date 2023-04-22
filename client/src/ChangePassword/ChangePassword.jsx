import React from 'react'

const ChangePassword = () => {
  return (
    <div>
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
    </div>
  )
}

export default ChangePassword