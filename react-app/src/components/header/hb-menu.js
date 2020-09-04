import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function HBMenu() {
  return (
    <Fragment>
      <div className='hb-menu-wrap'>
        <input type='checkbox' className='toggler' />
        <div className='hamburger'>
          <div></div>
        </div>
        <div className='menu'>
          <div>
            <div>
              <ul>
                <Link to='index.html'>
                  <li>Home</li>
                </Link>
                <Link to='about.html'>
                  <li>About</li>
                </Link>
                <Link to='contact.html'>
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
