import axios from 'axios';
import React, { Component, SyntheticEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function getBook(): any {
  let books: any = localStorage.getItem('books');
  if (!books) {
    books = [];
  } else {
    books = JSON.parse(books);
  }
  return books;
}

export default function Addbook() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ratings, setRatings] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');

  const data = {
    id: id,
    title: title,
    author: author,
    ratings: ratings,
    price: price,
    image: image,
    details: details,
  };
  console.log(id, title, author, price, image, details, ratings);

  async function storeData(e: SyntheticEvent) {
    e.preventDefault();
    console.log('working');
    const res = await axios.post('http://localhost:4000/books', JSON.stringify(data), {
      headers: {"Authorization" : `${localStorage.getItem("token")}`, 'Content-type': 'application/json' },
    });
    console.log(res);
    const f = JSON.stringify(data);
    console.log(f);
    console.log('unnnnnnnnnnn......//////------>>>>>' + f);
  }

  return (
    <div>
      <form className='form-group1'>
        <div className='form-group'>
          <label>Id</label>
          <input
            type='number'
            className='form-control'
            id='id'
            placeholder='Enter the Id'
            onChange={(e): void => setId(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlSelect1'>Title</label>
          <input
            type='text'
            className='form-control title'
            id='title'
            placeholder='Enter the title'
            onChange={(e): void => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlSelect2'>Author Name</label>
          <input
            type='text'
            className='form-control author'
            id='author'
            placeholder='Enter the Author'
            onChange={(e): void => setAuthor(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlSelect2'>Ratings</label>
          <input
            type='text'
            className='form-control ratings'
            id='ratings'
            placeholder='Enter the ratings'
            onChange={(e): void => setRatings(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlSelect2'>Price</label>
          <input
            type='number'
            className='form-control price'
            id='price'
            placeholder='Enter the price'
            onChange={(e): void => setPrice(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlSelect2'>Image</label>
          <input
            type='text'
            className='form-control price'
            id='image'
            placeholder='Enter the Image path'
            onChange={(e): void => setImage(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleFormControlTextarea1'>Details</label>
          <textarea
            className='form-control details'
            id='details'
            placeholder='Enter the discription of the book'
            onChange={(e): void => setDetails(e.target.value)}
          ></textarea>
        </div>
        <button type='submit' className='btn2 btn-primary' onClick={(e) => storeData(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}
