import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import logo from './images/planet.png';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

const App = () => (
  <>
    <header>
      <div className="logoContainer">
        <img src={logo} alt="logo" width={50} height={50} />
        <h1 className="appHeading">Space Travelers&apos; Hub</h1>
      </div>
      <Navbar />
    </header>
    <hr />
    <div className="mainAppContainer">
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </div>
  </>
);

export default App;
