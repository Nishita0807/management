import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";
const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/charts-and-maps">Map</Link>
        </li>
        <li>
          <Link to="/line-graph">Line Graph</Link>
        </li>
        <li>
          <Link to="/contact-management">Contact List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
