import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#e0f7fa' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
    <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
    <Link to="/profile">Perfil</Link>
  </nav>
);

export default Navbar; 