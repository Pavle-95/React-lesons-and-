import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list) {
      return JSON.parse(localStorage.getItem('list'));
    }
    else{
      return [];
    }
  }

  // States
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg:'', type: ''});


  // Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      // Display alert
      showAlert(true, 'danger', 'please enter the value')
    }
    else if (name && isEditing) {
      // Deal with edit
      setList(list.map((item)=> {
        if(item.id === editID){
          return{...item, title: name}
        }
        return item
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value change')
    }
    else {
      // show alert
      showAlert(true, 'success', 'item aded to the list')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show,type,msg})
  }

  const clearList = () => {
    showAlert(true,'success','List is clear')
    setList([]);
    setName('');
    setEditID(null);
    setIsEditing(false);
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id)
    setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      <form 
        className='frocery-form' 
        onSubmit={handleSubmit}
      >
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input 
            type="text" 
            className='grocery' 
            placeholder='e.g. eggs' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} list={list} editItem={editItem}/>
          <button 
            className='clear-btn'
            onClick={clearList}
            >
            Clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
