import './App.css';
import { Route, Routes } from "react-router-dom"
import UserList from './Components/UserList';
import UserPhotos from './Components/UserPhotos';

import UserAlbums from './Components/UserAlbums';

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/albums/:albumId' element={<UserAlbums />} />
        {/* <Route path='/albums/:albumId/photos/:photoId' element={<UserPhotos />} /> */}
      </Routes>
    </>

  );
}

export default App;
