import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import logo from './images/planet.png';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';

const App = () => {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo" />
          <h1>Space Travelers' Hub</h1>
        </div>
        <Navbar />
      </header>

      <Routes>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route path="/missions" element={<Missions />}></Route>
      </Routes>
    </>
  );
};

export default App;
