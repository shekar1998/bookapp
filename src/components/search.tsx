import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

let books: any = localStorage.getItem('books'); //---strings
if (!books) {
  books = []; //creating if not present
} else {
  books = JSON.parse(books); //we need it in object
}

interface Props {
  onSearch: Function;
}
export default function Search(props: Props) {
  const [select, setSelect] = useState();
  const [search, setSearch] = useState();

  const setValues = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    console.log('lllllllllllllllllll');
    const val : any = e.target.value;
    console.log(val + '===>yyyyyyyyyyyy');

    setSearch(val);
  };

  const Select = (e: ChangeEvent<HTMLSelectElement>) => {
    const sel : any = e.target.value;
    console.log(sel);
    setSelect(sel)
  };

  const searchButton = () => {
    props.onSearch(select, search)
  };

  return (
    <div className="finalstyle">
      <div className='dropdown dropdown12'>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) => Select(e)}
          className=' btn4 btn-primary dropdown-toggle dropdown-menu drop2'
        >
          <option value='' selected>
            Please Select
          </option>
          <option className='dropdown-item' value='id'>
            ID
          </option>
          <option className='dropdown-item' value='author'>
            AUTHOR
          </option>
          <option className='dropdown-item' value='title'>
            TITLE
          </option>
          <option className='dropdown-item' value='ratings'>
            RATINGS
          </option>
        </select>
      </div>
      <form className='form-inline searchbox'>
        <div className='md-form my-0'>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValues(e)}
            className='form-control mr-sm-2'
            type='text'
            placeholder='Search'
            aria-label='Search'
          />
          <button type='button' onClick={() => searchButton()} className='btn searchbtn btn-primary'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
