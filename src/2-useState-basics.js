import React, { useState } from 'react';

const UseStateBasics = () => {
  const  [state, setstate] = useState('iam anwar')

  const handleClick=()=>
    {
      if (state=== 'iam anwar') {
      setstate('no zaid anwar');
    } else {
      setstate('iam anwar');
    }
    };
  return (
    <React.Fragment>
      <h1>{state}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
  
};

export default UseStateBasics;
