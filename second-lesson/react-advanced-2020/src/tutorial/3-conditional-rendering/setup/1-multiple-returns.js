import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(()=>{
    fetch(url)
    .then((response) => {
      response.json()
      .then((user) => {
        console.log(user);
        const {login} = user;
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      })
    })
  }, [])


  if (isloading) {
    return <h2>loading...</h2>
  }
  
  if (isError) {
    return <h2>Error!</h2>
  }

  return (
      <div>
        <h1>{user}</h1>
      </div>
    );
};

export default MultipleReturns;
