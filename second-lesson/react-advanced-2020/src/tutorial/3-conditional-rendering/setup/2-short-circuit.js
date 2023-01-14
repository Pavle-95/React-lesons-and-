import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';


  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>Value: {secondValue}</h2> */}
      <h1>{isError ? <h1>Lune lune lune </h1> : <>
        <div>
          <h1>pera zika mika</h1>
          <div>
            <img src="" alt="" />
            <h2>error</h2>
          </div>
        </div>
      </>}</h1>

      <button className='btn' onClick={() => {setIsError(!isError)}}>toggle error</button>
    </>
  );
};

export default ShortCircuit;
