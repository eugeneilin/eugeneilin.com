import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation(props) {
  return (
    <nav className='top' id='main-nav'>
      {props.links.map(function (link) {
        return (
          <NavLink to={link.url} key={link.url} exact className='current'>
            {link.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
