import React, { useState } from 'react';
import './App.css';

const App = () => {
  const IMGURL=import.meta.env.BASE_URL;
  const [tooglePassword,setTooglePassword]=useState("password");
  const [tooglePasswordConfirm,setTooglePasswordConfirm]=useState("password");
  const [isLoginView, setIsLoginView] = useState(true);

    function tooglePwd(){
      setTooglePassword(tooglePassword==="password"?"text":"password");
    }
    function tooglePwdConfirm(){
      setTooglePasswordConfirm(tooglePasswordConfirm==="password"?"text":"password");
    }
    function switchView(){
      setIsLoginView(isLoginView===true?false:true);
    }

  return (
    <div className='app'>
      {isLoginView === true &&
      <div className='login-container'>
        <h2>Sign in with email</h2>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"mail.png"} alt='' />
          <input type='text' placeholder='Enter your email' />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePassword} placeholder='Enter your password' />
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div>
        <div className='forgot-password'>Forgot <label>Password</label>?</div>
        <button>Get Started</button>
        <p>Don't have an account? <label onClick={()=>switchView()}>Sign up </label></p>
      </div>
        }
        {isLoginView === false &&
         <div className='signup-container'>
          <h2>Create Account</h2>
          <div className='input-group'>
          <img className='left-icon' src={IMGURL+"user.png"} alt='' />
          <input type='text' placeholder='Full name' />
        </div>
         <div className='input-group'>
          <img className='left-icon' src={IMGURL+"mail.png"} alt='' />
          <input type='text' placeholder='Enter your email' />
        </div>
         <div className='input-group'>
          <img className='left-icon' src={IMGURL+"phone.png"} alt='' />
          <input type='text' placeholder='Mobile number' />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePassword} placeholder='Enter your password' />
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div><div className='input-group'>
          <img className='left-icon' src={IMGURL+"lock.png"} alt='' />
          <input type={tooglePasswordConfirm} placeholder='Confirm your password' />
          <img className='right-icon' src={IMGURL+"eye.png"} alt='' onClick={()=>tooglePwdConfirm()} />
        </div>
          <button>Register</button>
          <p>Already have an account? <label onClick={()=>switchView()}>Login Here</label></p>
      </div>
          }
    </div>
  );
}

export default App;