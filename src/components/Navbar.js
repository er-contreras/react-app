import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className={styles.navBar}>
      <div id={styles.title}>
        <h1>Math Magicians</h1>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName={styles.activelink}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
