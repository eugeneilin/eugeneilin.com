import React, { Fragment } from 'react';
import Latest from '../components/home/latest';
import MusicLinks from '../components/home/music-links';
import HeroHome from '../components/home/hero-home';

export default function Home() {
  return (
    <Fragment>
      <HeroHome />
      <Latest />
      <MusicLinks />
    </Fragment>
  );
}
