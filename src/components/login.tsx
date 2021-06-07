import React, { SyntheticEvent, useEffect, useState } from 'react';
import '../style.css';
import '../util.css';
import '../main.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

interface Prop {
  oncell: Function;
}
  
export default function Login(props: Prop) {
  const [email, setEmail]: any = useState();
  const [password, setPassword]: any = useState();
  const [message, setMessage]: any = useState('Welcome 😃');
  const value = message;

  async function detailsSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data --- > '+ JSON.stringify(data));
        
        localStorage.setItem('token', data.token);
        if (data.token) {
          console.log('----------->'+data.token);
          setMessage('You are Successfully Logged in 🥳');
          props.oncell(true);
        } else {
          props.oncell(false);
          setMessage('Login failed :/ Please enter the proper credentials');
        }
      });
  }

  return (
    <Router>
      <div>
        <link href='http://davidhulme.name/wp-content/uploads/2016/08/cropped-Books-Header-1-1.jpg' rel='stylesheet' />
        <div className='main-content main-font'>
          <div className='limiter main-font'>
            <div className='container-login100 newmargin'>
              <div className='wrap-login100'>
                <div className='login100-form-title'>
                  <span className='login100-form-title-1'>{value}</span>
                </div>
                <form className='login100-form validate-form'>
                  <div className='wrap-input100 validate-input m-b-26' data-validate='Username is required'>
                    <span className='label-input100'>Email</span>
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                        setEmail(e.target.value)
                      }
                      className='input100'
                      type='text'
                      name='username'
                      placeholder='Enter email addreess'
                    />
                    <span className='focus-input100'></span>
                  </div>
                  <div className='wrap-input100 validate-input m-b-18' data-validate='Password is required'>
                    <span className='label-input100'>Password</span>
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                        setPassword(e.target.value)
                      }
                      className='input100'
                      type='password'
                      name='pass'
                      placeholder='Enter password'
                    />
                  </div>
                  <div className='flex-sb-m w-full p-b-30'>
                    <div className='contact100-form-checkbox'>
                      {/* <input className='input-checkbox100' id='ckb1' type='checkbox' name='remember-me' />
                      <label className='label-checkbox100'>Remember me</label> */}
                    </div>
                    <div>
                      <a href='#' className='txt1'>
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className='container-login100-form-btn'>
                    <button onClick={detailsSubmit} className='login100-form-btn'>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
