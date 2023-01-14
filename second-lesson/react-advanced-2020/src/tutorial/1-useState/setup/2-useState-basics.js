import React, { useState } from 'react';

const UseStateBasics = () => {
  // Pokazna vezba
  // const value = useState(1)[0];
  // const hendler = useState(1)[1];
  // console.log(value, hendler);

  // Prvi primer useState hook-a
  const [text, setText] = useState('random title!')

  const handleClikc = () => {
    if(text === 'random title!') {
      setText('Hello World')
    }
    else {
      setText('random title!')
    }
  
  }

  return(
      <React.Fragment>
         <h1>{text}</h1>
         <button className='btn' onClick={handleClikc}>
            Change title
         </button>
      </React.Fragment>
  );
};

export default UseStateBasics;
