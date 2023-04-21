import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name:</label>
      <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />

      <label htmlFor="lastname">Last Name:</label>
      <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
