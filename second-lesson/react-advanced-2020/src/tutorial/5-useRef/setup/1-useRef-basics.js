import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  }

  useEffect(()=> {
    divContainer.current.style.border = '1px solid red'
  })
  
  console.log(refContainer);
  console.log(divContainer);
  
  return (
    <>
      <form className='form' action="" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
          <button type='submit'>Submit</button>
        </div>
        <div ref={divContainer}>Hello world</div>
      </form>
    </>
  );
};

export default UseRefBasics;
