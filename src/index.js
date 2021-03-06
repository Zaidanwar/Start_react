import React from 'react';
import ReactDOM from 'react-dom';
// Adding css
import './index.css';


const books=[
  { id:1,
     author:'Amelia hepworth',
 title:'i love u  to the  b and black',
img:'https://m.media-amazon.com/images/I/61r-WomIz0L._AC_UY218_.jpg'},

{id:2,
 author:'jay shetty',
 title:'Think like a monk',
img:'https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._AC_SX184_.jpg'},
];

function Booklist()
{
  return(
  
    <section className='booklist'>
      
    
      {books.map((book)=>{
         const {img,title,author}=book;
         return<Book key={book.id} book={book}></Book>;
      })}
    </section>

  );

}

const Book =(props)=>{
  const {img,title,author}=props.book;
  return(
    <article className='book'>
    <img 
  src={img}
  alt=''/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    </article>
  )
};
// const Image=()=>(
//   <img 
//   src='https://m.media-amazon.com/images/I/61r-WomIz0L._AC_UY218_.jpg'
//   alt=''
//   />
// );
// const Title=()=> <h4>i love u  to the  b and black</h4>;
// const Author=()=> <h4>Amelia hepworth</h4>;

ReactDOM.render(
  <Booklist></Booklist>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
