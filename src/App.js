import React, { useState, useEffect } from 'react';
import './App.css';
//import AddContact from './AddContact';

function AddContact({ onSave, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== '' && phone.trim() !== '') {
      onSave({ name, phone });
      onClose();
    }
  };

  return (
    <div className='container'>
      <div>
        <label>Name</label><br />
        <input type='text' value={name} onChange={handleNameChange}></input>
      </div>
      <div>
        <label>Phone</label><br />
        <input type='text' value={phone} onChange={handlePhoneChange}></input>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function App() {
  const [userData, setUserData] = useState(null);
  const [showAddContact, setShowAddContact] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  function HandleDeleteContact(id) {
    const userIndex = userData.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      const updatedElements = [...userData];
      updatedElements.splice(userIndex, 1);
      setUserData(updatedElements);
    }
  }

  const handleAddContact = (newContact) => {
    setUserData([...userData, { id: userData.length + 1, ...newContact }]);
  };


  return (
    <div className="App">
      <h1>User Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td><button onClick={() => HandleDeleteContact(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='addContact' onClick={() => setShowAddContact(true)}>Add Contact</button>
      {showAddContact && <AddContact onSave={handleAddContact} onClose={() => setShowAddContact(false)} />}

    </div>
  );
}

export default App;
