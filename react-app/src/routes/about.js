import React, { Fragment } from 'react';
import BioFB from '../components/about/bio-fb';
import Instagram from '../components/about/instagram';
import HeroAbout from '../components/about/hero-about'

export default function About() {
  return (
    <Fragment>
      <HeroAbout />
      <BioFB />
      <Instagram />
    </Fragment>
  );
}
