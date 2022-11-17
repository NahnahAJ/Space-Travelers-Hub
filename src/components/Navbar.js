import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav>
    <ul className={style.navbarContainer}>
      <li className={style.navLink}>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li className={style.navLink}>
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <li className={`${style.navLink} ${style.profileNav}`}>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
