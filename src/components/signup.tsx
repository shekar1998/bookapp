import React, { SyntheticEvent, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { idText } from 'typescript';
import '../style.css';
import '../util.css';
import '../main.css';
import axios from 'axios';

export default function Signup() {
  const [name, setFname]: any = useState();
  const [email, setEmail]: any = useState();
  const [password, setPassword]: any = useState();
  const [passwordConfirm, setConfirmPassword]: any = useState();
  const [redirect, setRedirect] = useState(false);

  console.log(
    'First Name ---> ' +
      name +
      '///Last Name ---> ' +
      email +
      '///Password ---> ' +
      password +
      '///ConfirmPassword ---> ' +
      passwordConfirm
  );

  async function detailsSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/signup', JSON.stringify({
        name,
        email,
        password,
        passwordConfirm,
      }),{
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(res);
    setRedirect(true);
}
  if (redirect) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <div className='limiter'>
        <div className='container-login100 newmargin'>
          <div className='wrap-login100'>
            <div className='login100-form-title'>
              <span className='login100-form-title-1'>Welcome 😃!</span>
            </div>
            <form className='login100-form validate-form'>
              <div className='wrap-input100 validate-input m-b-26' data-validate='Username is required'>
                <span className='label-input100'>Name</span>
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFname(e.target.value)}
                  className='input100'
                  type='text'
                  name='fname'
                  placeholder='Enter First Name'
                />
                <span className='focus-input100'></span>
              </div>
              <div className='wrap-input100 validate-input m-b-26' data-validate='Username is required'>
                <span className='label-input100'>Email</span>
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(e.target.value)}
                  className='input100'
                  type='text'
                  name='lname'
                  placeholder='Enter Last Name'
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
              <div className='wrap-input100 validate-input m-b-18' data-validate='Password is required'>
                <span className='label-input100'>Confirm Password</span>
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    setConfirmPassword(e.target.value)
                  }
                  className='input100'
                  type='password'
                  name='cpass'
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
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
