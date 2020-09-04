import React from 'react';

export default function Form() {
  return (
    <section id='contact-a' className='text-center py-2'>
      <div className='container'>
        <h2 className='section-title'>Get in touch</h2>
        <div className='bottom-line'></div>
        <p className='lead'>Please fill out this form.</p>
        <form method='POST' data-netlify='true' data-netlify-recaptcha='true'>
          <div className='text-fields'>
            <input
              type='text'
              className='text-input name-input'
              placeholder='Name'
              name='name'
              required
            />
            <input
              type='text'
              className='text-input subject-input'
              placeholder='Subject'
              name='subject'
              required
            />
            <input
              type='email'
              className='text-input email-input'
              placeholder='Email Address'
              name='email'
              required
            />
            <textarea
              className='text-input message-input'
              placeholder='Message'
              name='message'
              required
            ></textarea>
            <div className='my-2'>
              <div data-netlify-recaptcha='true'></div>
            </div>
          </div>
          <button type='submit' className='btn-medium'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
