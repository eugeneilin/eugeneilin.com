import React from 'react';

export default function Form() {
  return (
    <section id='contact-a' class='text-center py-2'>
      <div class='container'>
        <h2 class='section-title'>Get in touch</h2>
        <div class='bottom-line'></div>
        <p class='lead'>Please fill out this form.</p>
        <form method='POST' data-netlify='true' data-netlify-recaptcha='true'>
          <div class='text-fields'>
            <input
              type='text'
              class='text-input name-input'
              placeholder='Name'
              name='name'
              required
            />
            <input
              type='text'
              class='text-input subject-input'
              placeholder='Subject'
              name='subject'
              required
            />
            <input
              type='email'
              class='text-input email-input'
              placeholder='Email Address'
              name='email'
              required
            />
            <textarea
              class='text-input message-input'
              placeholder='Message'
              name='message'
              required
            ></textarea>
            <div class='my-2'>
              <div data-netlify-recaptcha='true'></div>
            </div>
          </div>
          <button type='submit' class='btn-medium'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
