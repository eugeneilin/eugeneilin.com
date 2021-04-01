import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation(props) {
  return (
    <nav className='top' id='main-nav'>
      <div class='container'>
        <Link to='/'>
          <h1 id='logo'>Eugene Ilin</h1>
        </Link>
        <ul>
          {props.links.map(function (link) {
            return (
              <li>
                <NavLink
                  to={link.url}
                  key={link.url}
                  exact
                  activeClassName='current'
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
