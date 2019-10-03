import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/"><h2>Microblog</h2></NavLink>
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <NavLink to="/">Blog</NavLink>
              </li>
              <li className="nav-item nav-link">
                <NavLink to="/new">Add new post</NavLink>
              </li>
            </ul>
        </nav>
    );
  }
}

export default Nav;
