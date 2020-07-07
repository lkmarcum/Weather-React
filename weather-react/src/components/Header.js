import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <header>
      <h1>React Weather</h1>
      <div className="links">
        <button>Home</button>
        <button>About</button>
      </div>
    </header>
  );
};

export default Header;
