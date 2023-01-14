import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  return <>
  
    <main>
      <section>
  
        <h3>Number of items: {people.length}</h3>
        <List people={people} />
        <button onClick={()=>{setPeople([])}}>Clear</button>
      </section>
    </main>
  </>;
}

export default App;
