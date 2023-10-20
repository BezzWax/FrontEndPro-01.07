import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';

import UserAlbums from './Components/UserAlbums';

function App() {

  const userLink = 'https://jsonplaceholder.typicode.com/users';
  const [userdata, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(userLink)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div>
        {userdata.map((dataObj) => (
          <div>
            <div className='userContainer'>
              <p>{dataObj.name}</p>
              <p>{dataObj.id}</p>
            </div>
            <Link to={`/albums/${dataObj.id}`} key={dataObj.id}> Go </Link>
          </div>
        ))}

      </div>

      <Routes>
        <Route path='/albums' element={<UserAlbums />} />
      </Routes>

    </>

  );
}

export default App;
