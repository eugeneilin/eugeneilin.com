import React, { Fragment } from 'react';

export default function HBMenu() {
  return (
    <Fragment>
      <div class='hb-menu-wrap'>
        <input type='checkbox' class='toggler' />
        <div class='hamburger'>
          <div></div>
        </div>
        <div class='menu'>
          <div>
            <div>
              <ul>
                <a href='index.html'>
                  <li>Home</li>
                </a>
                <a href='about.html'>
                  <li>About</li>
                </a>
                <a href='contact.html'>
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
