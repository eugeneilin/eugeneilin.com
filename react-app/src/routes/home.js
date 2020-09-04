import React, { Fragment } from 'react';
import Latest from '../components/home/latest';
import MusicLinks from '../components/home/music-links';
import Hero from '../components/header/hero';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Latest />
      <MusicLinks />
    </Fragment>
  );
}
