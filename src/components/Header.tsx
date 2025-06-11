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
        <a
          href="https://zespace.notion.site/efc2c95d163e480792cc347d32d5d7fa?v=6e86c74bb342444fb54f6b502591a94a&source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <NavLink to="/hobbies">Hobbies</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
