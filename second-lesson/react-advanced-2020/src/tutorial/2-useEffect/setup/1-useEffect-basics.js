import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);


  useEffect(() => {
    console.log('use effect');
    if(value > 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);


  console.log('render, vomponent');

  return (
  <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => {setValue(value+1)}}>Clicik me</button>
  </>
  );



};

export default UseEffectBasics;
