import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>Ze Chen</h1>
      <nav>
        <Link to="/">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/hobbies">Hobbies</Link>
      </nav>
    </header>
  );
}

export default Header;