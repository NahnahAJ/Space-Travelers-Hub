import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import logo from './images/planet.png';
import MyProfile from './components/MyProfile';

const App = () => (
  <>
    <header>
      <div>
        <img src={logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <Navbar />
    </header>

    <Routes>
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;