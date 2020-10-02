import React, { Fragment } from 'react';
import Form from '../components/contact/form';
import HeroContact from '../components/contact/hero-contact';

function Contact() {
  return (
    <Fragment>
      <HeroContact />
      <Form />
    </Fragment>
  );
}

export default Contact;
