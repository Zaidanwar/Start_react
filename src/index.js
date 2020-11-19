import React from 'react';
import ReactDOM from 'react-dom';
// Adding css
import './index.css';




function Booklist()
{
  return (
    <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    </section>
  )

};
const Book =()=>{
  return(
    <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
    </article>
  )
};
const Image=()=>(
  <img 
  src='https://m.media-amazon.com/images/I/61r-WomIz0L._AC_UY218_.jpg'
  alt=''
  />
);
const Title=()=> <h4>i love u to the and black</h4>;
const Author=()=> <h4>Amelia hepworth</h4>;

ReactDOM.render(
  <Booklist></Booklist>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
