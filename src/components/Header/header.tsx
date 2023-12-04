import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    
      <header>
        <nav>
          <ul>
            <li>
              <a href="#first-section">My first section</a>
              <br />
              <a href="#second-section">My second section</a>
              <a href="#first-section">LINK OLD</a>
            </li>
          </ul>
        </nav>
      </header>
    
  );
};

export default Header;
