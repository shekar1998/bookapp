import React, { Component } from 'react';
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

  console.log(id + ' : Title<<<<<<------->>>>>>>setTitle : ' + setId);
  console.log(title + ' : Title<<<<<<------->>>>>>>setTitle : ' + setTitle);
  console.log(author + ' : Title<<<<<<------->>>>>>>setTitle : ' + setAuthor);
  console.log(ratings + ' : Title<<<<<<------->>>>>>>setTitle : ' + setRatings);
  console.log(price + ' : Title<<<<<<------->>>>>>>setTitle : ' + setPrice);
  console.log(image + ' : Title<<<<<<------->>>>>>>setTitle : ' + setImage);
  console.log(details + ' : Title<<<<<<------->>>>>>>setTitle : ' + setDetails);

  const data = {
  id: id ,
    title: title ,
    author:  author ,
    ratings:  ratings ,
    price:  price ,
    image:  image ,
    details:  details ,
  };

  function storeData(): void {
    const book = getBook();
    book.push(data);
    localStorage.setItem('books', JSON.stringify(book));
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
        <button type='submit' className='btn2 btn-primary' onClick={() => storeData()}>
          Submit
        </button>
      </form>
    </div>
  );
}
