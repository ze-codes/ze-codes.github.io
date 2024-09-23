import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <h1>Ze Chen</h1>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/experiences">Experiences</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/hobbies">Hobbies</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
