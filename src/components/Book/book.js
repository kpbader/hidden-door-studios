import './book.css';
import React from 'react';
import ContactForm from '../Contact-Form/contact-form';
import Fade from 'react-reveal';

function Book() {


  return (
    <section id="booking-page">
      <Fade>
        <ContactForm />
      </Fade>
    </section>
  );
};

export default Book;