import React, { Fragment } from 'react';
import HBMenu from './hb-menu';
import Navigation from './navigation';
import Hero from './hero';

const navigationLinks = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/contact',
    title: 'Contact',
  },
];

export default function Header() {
  return (
    <Fragment>
      <HBMenu />
      <Navigation links={navigationLinks} />
    </Fragment>
  );
}
