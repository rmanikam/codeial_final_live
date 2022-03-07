import React from 'react';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <img src="" alt="logo" />
      </div>
      <div className="search-container">
        <img className="search-icon" src="" alt="search-icon" />
        <input placeholder="Search" />
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img src="" alt="user-dp" />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img src="" alt="user-dp" />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img src="" alt="user-dp" id="user-dp" />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>Log in</li>
            <li> Log out </li>
            <li> Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
