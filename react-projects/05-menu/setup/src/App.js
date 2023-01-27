import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItem, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const fiterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };





  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our mnenu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={fiterItems} categories={categories}/>
        <Menu items={menuItem}/>
      </section>
    </main>
  );

}

export default App;
