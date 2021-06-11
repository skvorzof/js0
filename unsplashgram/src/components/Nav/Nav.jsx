import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

export const Nav = () => {
  return (
    <header className="header">
      <Link to="/" replace>
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <input type="text" placeholder="Найти" />
      <nav>
        <Link to="/" replace className="link">
          Home
        </Link>
        <Link to="/auth" replace className="link">
          Login
        </Link>
      </nav>
    </header>
  );
};
