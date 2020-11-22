import React from 'react'

const Book =(props)=>{
  const {img,title,author}=props.book;
  const EventExample=(author)=>{
    console.log(author);
  };
  return(
    <article className='book'>
    <img 
  src={img}
  alt=''/>
    <h1 onClick={()=>console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={()=>EventExample(author)}>Click me to get the author</button>
    </article>
  )
};
export default Book