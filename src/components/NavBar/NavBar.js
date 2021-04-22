import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
  return (
    <div className='NavBar'>
        <Link to="/Home" className='NavBarButton'><div>Overview</div></Link>
        <Link to="/Fiscal" className='NavBarButton'><div>Fiscal Policy</div></Link>
        <Link to="/Monetary" className='NavBarButton'><div>Monetary Policy</div></Link>
    </div>
  );
};