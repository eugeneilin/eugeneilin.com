import React, { Fragment } from 'react';
import HBMenu from './hb-menu';
import Navigation from './navigation';

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
