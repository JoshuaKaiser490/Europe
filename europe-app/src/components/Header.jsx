import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1em', backgroundColor: '#003399', color: 'white' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1em', justifyContent: 'center' }}>
          <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
          <li><Link to="/germany" style={{ color: 'white' }}>Germany</Link></li>
          <li><Link to="/france" style={{ color: 'white' }}>France</Link></li>
          <li><Link to="/italy" style={{ color: 'white' }}>Italy</Link></li>
          <li><Link to="/spain" style={{ color: 'white' }}>Spain</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
