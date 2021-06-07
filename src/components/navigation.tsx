import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Card from './Card';
import Add from './Addbook';
import Subcard from './subcard';
import Search from './search';
import Login from './login';
import Signin from './signup';
import Model from './model'
import '../index.css';

export default function Navigation() {
  const [paramaters, setParams] = useState({});
  const [value1, setValue] = useState(false);
  const [log, setLog] = useState('');
  const [value2, setValue2] =useState({})

  const onSearch = (select: string, value: string) => {
    console.log('Select ===>' + select + '   Value===>' + value);
    setParams({ select, value });
  };

const onDisplay = (val :any) => {
  console.log(val+" normal vlue");
  setValue2(val);
  console.log(JSON.stringify(value2)+'  value2')
}

  const onValue = (val: any) => {
    console.log('Id===>' + val);
    setValue(val);
  };
  console.log('value 111===>', value1);

   function logout() {
    localStorage.clear();
 setLog('You have been logged out successfully !')
 setValue(!value1)
  }

  window.onload = function() {
    const token = localStorage.getItem('token');
    if(token)
    {
      setValue(true)
    }else setValue(false)
  }


  return (
    <Router>
      <div className='main-font'>
        <nav className='navbar navbar-expand-lg navbar-dark primary-color'>
          <a className='navbar-brand' href='#'>
            Book Management App
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#basicExampleNav'
            aria-controls='basicExampleNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'>Search</span>
          </button>
          <div className='collapse navbar-collapse' id='basicExampleNav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home
                  <span className='sr-only'>(current)</span>
                </a>
              </li>
              {value1 && (
                <li className='nav-item'>
                  <Link to='/books'>
                    <a className='nav-link' href='#'>
                      Books
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
              {value1 && (
                <li className='nav-item'>
                  <Link to='/AddBook'>
                    <a className='nav-link addbook' href='#'>
                      Add Books
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
              {value1 && (
                <li className='nav-item'>
                  <Link to='/'>
                    <a onClick={logout} className='nav-link addbook' href='#'>
                      Logout
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
              {!value1 && (
                <li className='nav-item'>
                  <Link to='/login'>
                    <a className='nav-link' href='#'>
                      Login
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
              {!value1 && (
                <li className='nav-item'>
                  <Link to='/signup'>
                    <a className='nav-link' href='#'>
                      SignIn
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
            </ul>
            <Search onSearch={onSearch} />
            {/* onChange={(e): void => searchInput(e)}  */}
          </div>
        </nav>
        <h1 className="loggedout">{log}</h1>
      </div>
      <Switch>
        <Route exact path='/books' component={() => <Card paramaters={paramaters} disp={onDisplay} />}></Route>
        <Route exact path='/AddBook'>
          <Add />
        </Route>
        <Route exact path='/books/:val'>
          <Subcard />
        </Route>
        <Route exact path='/login' component={() => <Login oncell={onValue} />} />
        <Route exact path='/signup'>
          <Signin />
        </Route>
        <Route exact path='/unauthorized'>
          <Model />
        </Route>
      </Switch>
    </Router>
  );
}
// paramater={paramaters} onValue={onValue}
