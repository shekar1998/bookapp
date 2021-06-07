import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../index.css';

interface MatchParams {
  id: any;
}

interface Props {}

export default function Subcard(props: Props) {
  const [val, setVal] = useState([]);
  const id = useParams<MatchParams>();
  const h: any = id;
  console.log('.////////0000000000///---->' + h['val']);
  const title = h['val'];
  console.log('Sub Card Data ----- > ' + JSON.stringify(h['val']));

  // useEffect(() => {
  //   // setVal(findingById(id));
  // }, [id]);

  // const val1 = findingById(id)

  // function findingById(id: any) {
  //  return books.find((book:any) =>{
  //    if(id){

  //    if(book.id === id){
  //      return true
  //    }

  //    }    else{
  //     return null;
  //   }
  // } )
  // }
  let array: any[];
  if (id) {
    fetch('http://localhost:4000/books/title/' + title)
      .then((res) => res.json())
      .then((data) => {
        console.log('data------------->' + JSON.stringify(data));
        console.log(data.image);
        setVal(data);
        return array;
      });
  }

  // console.log('++++++++++++++++++++++++'+JSON.stringify(val));

  return (
    <div>
      {val.map((val: any) => {
        return (
          <div>
            <div className='card card-cascade wauthorer reverse'>
              <div className='view view-cascade overlay'>
                <img className='card-img-top cardimg2' src={val.image} alt='Card image cap' />
              </div>
              <div className='card-body cardBody card-body-cascade text-center'>
                <h4 className='card-title textstyle1'>
                  <strong>{val.title}</strong>
                </h4>
                <h6 className='font-weight-bold indigo-text textstyle py-2'>{val.details}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
