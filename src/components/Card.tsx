import React, { Component, ReactElement, SelectHTMLAttributes, SyntheticEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Star from './star';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import '../index.css';
import { deleteBook, bookData12 } from './utils';
import '../index.css';

let books: any = localStorage.getItem('books'); //---strings
if (!books) {
  books = []; //creating if not present
} else {
  books = JSON.parse(books); //we need it in object
}

interface Props {
  paramaters?: any;
  onValue?: Function;
  disp: Function;
}

export default function Card(props: Props) {
  // const [id, setId] = useState('');
  const [err, setErr] = useState(false);
  const [array, setArray] = useState([{}]);
  const [centredModal, setCentredModal] = useState(true);

  const select = props.paramaters.select;
  const value = props.paramaters.value;

  useEffect(() => {
    bookData12().then((res: any) => {
      console.log(res);
      return setArray(res);
    });
    if (select && value) bookData(select, value);
  }, [props.paramaters]);
  // bookData(props.paramaters.select, props.paramaters.value);
  console.log('---------------->>>', array);

  async function bookData(select: string, value: string) {
    console.log('lllllllllllll');
    if (select === 'id') {
      console.log('Value----------->', value);
      console.log('entererd');
      await fetch('http://localhost:4000/books/id/' + value)
        .then((res) => res.json())
        .then((data) => {
          console.log('data------------->', data);
          setArray(data);
          console.log(array);
          return array;
        });
    }
    if (select === 'title') {
      console.log('Value----------->', value);
      console.log('entererd');
      await fetch('http://localhost:4000/books/title/' + value)
        .then((res) => res.json())
        .then((data) => {
          console.log('data------------->', data);
          setArray(data);
          console.log(array);
          return array;
        });
    }
    if (select === 'author') {
      console.log('Value----------->', value);
      console.log('entererd');
      await fetch('http://localhost:4000/books/author/' + value)
        .then((res) => res.json())
        .then((data) => {
          console.log('data------------->', { ...data[0] });
          const arr = { ...data[0] };
          console.log(arr);
          setArray([arr]);
          return array;
        });
    }
  }

  console.log(array);

  // function valueId(id: any): void {
  //   console.log(id);
  //   setId(id)
  //   props.onValue(id);

  function deletefunc(title: any) {
    deleteBook(title).then((err) => {
      console.log(err);
      if (err) setErr(true);
      bookData12().then((res: any) => {
        console.log(res);

        return setArray(res);
      });
    });
  }
  console.log(err);

  // books.forEach((val: any, index: number) => {
  //   console.log('val', val.id);
  //   console.log('id', id);
  //   if (val.id === id) {
  //     books.splice(index, 1);
  //   }
  //   localStorage.setItem('books', JSON.stringify(books));
  //   console.log(books);
  // });
  // setData(books);
  // setV(books);

  function details(val: any) {
    console.log(val);
    props.disp(val);
  }

  // function modelDisplay(e: SyntheticEvent) {
  //   e.preventDefault();
  //   console.log('ENTERED MODEL FUNCTION');
  //   console.log('ENTERED MODEL');
  //   const myModal = document.getElementById('myModal')!;
  //   const myInput = document.getElementById('myInput')!;
  //   myModal.addEventListener('shown.mdb.modal', () => {
  //     myInput.focus();
  //   });
  // }
  const toggleShow = () => {
    <Redirect to='/login' />;
  };

  return (
    <div>
      {err && (
        <div>
          <MDBModal
            className='main-font'
            tabIndex='-1'
            show={centredModal}
            getOpenState={(e: any) => setCentredModal(e)}
          >
            <MDBModalDialog centered>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle className='main2-font'>Session Expired</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <p className='main1-font'>Login Again To Continue</p>
                </MDBModalBody>
                <MDBModalFooter>
                  <button type='button' onClick={toggleShow} className='btn btn-primary btn-md'>
                    Login
                  </button>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      )}
      {array.map((val: any) => {
        console.log('/////////////////////' + val);
        return (
          <div>
            <div className='card-group'>
              <div className='card mb-4'>
                <div className='view overlay'>
                  <ul className='showcase'>
                    <li>
                      <figure className='photo'>
                        <img className='card-img-top' src={val.image} alt='Card image cap' />
                      </figure>
                    </li>
                  </ul>
                  <a href='#!'>
                    <div className='mask rgba-white-slight'></div>
                  </a>
                </div>
                <div className='card-body'>
                  <h4 className='card-title localtext'>
                    <abbr className='abbr' title={val.title}>
                      {val.title}
                    </abbr>
                  </h4>
                  <h5 className='card-text localtext1'>
                    <abbr className='abbr' title={val.author}>
                      {val.author}
                    </abbr>
                  </h5>
                  <h5 className='card-text'>
                    <span>
                      Rating: {val.ratings} <Star current={val.ratings} outof={5} minof={1} />
                    </span>
                  </h5>
                  <Link to={`/books/${val.title}`}>
                    <button type='button' className='btn btn-primary btn-md'>
                      Read more
                    </button>
                  </Link>
                  <button type='button' onClick={() => deletefunc(val.title)} className='btn btn-primary btn-md2'>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      ,
    </div>
  );
}
