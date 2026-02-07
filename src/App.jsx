import React from 'react';
import './App.css';

const App = () => {
  const IMGURL=import.meta.env.BASE_URL;
  return (
    <div className='app'>
      <div className='login-container'>
        <h2>Sign in with email</h2>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"mail.png"} alt='' />
          <input type='text' placeholder='Enter your email' />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type='password' placeholder='Enter your password' />
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' />
        </div>
        <div className='forgot-password'>Forgot <label>Password</label>?</div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default App;