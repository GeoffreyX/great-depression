import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
  return (
    <div className='NavBar'>
        <Link to="/great-depression/Home" className='NavBarButton'><div>Overview</div></Link>
        <Link to="/great-depression/Fiscal" className='NavBarButton'><div>Fiscal Policy</div></Link>
        <Link to="/great-depression/Monetary" className='NavBarButton'><div>Monetary Policy</div></Link>
    </div>
  );
};