import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => { // eslint-disable-line
  const links = [
    {
      id: 1,
      path: '/home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => { // eslint-disable-line
          return (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link">
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
