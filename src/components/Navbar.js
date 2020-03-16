import React from 'react';

import './styles/Navbar.css';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link to="/" className="Navbar__brand">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Badge</span>
            <span className="font-weight-bold">Gryd</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
