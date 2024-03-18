import axios from 'axios';
import React, { useState } from 'react'
import '../Style.css'

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.get('http://localhost:3001/users');
          const users = response.data;
    
          const user = users.find(
            (user) => user.userName === username && user.password === password
          );
    
          if (user) {
            props.onAuthenticate();
          } else {
            alert('Invalid username or password');
          }
        } catch (error) {
          console.error('Error fetching users:', error);
          alert('An error occurred while logging in');
        }
      };
  return (
    <>
    <div className="background-top"></div>
    <div className="background-bottom"></div>
        <div className="login-container">
        <img src="./images/logo.jpeg" alt="DreamHome Realty" className="login-image" />
            <form className='login-form' onSubmit={handleSubmit}>
                <div className="mb-3">
                <input
                type="text"
                className="form-control"
                id="username"
                placeholder="User Name" required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
                </div>
                <div className="mb-3">
                <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password" required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
                </div>
                <button type="submit" className="btn btn-primary">
              Login
            </button>
            </form>
    </div>
    </>
  )
}
