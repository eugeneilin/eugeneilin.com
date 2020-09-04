import React from 'react';

export default function Latest() {
  return (
    <section id='home-a' className='text-center bg-light'>
      <div className='container py-2'>
        <h2 className='section-title'>The Latest</h2>
        <div className='bottom-line'></div>
        <p className='lead'>Here is the latest upload.</p>
        <div className='youtube-embed-wrapper'>
          <iframe
            className='youtube-embed-item'
            src='https://www.youtube.com/embed/z4PUwscNskA?rel=0&autoplay=1&start=1'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <div className='youtube-sub'>
          <p>Subscribe to our YouTube channel here</p>
          <i className='fas fa-chevron-right fa-2x'></i>
          <div
            className='g-ytsubscribe'
            data-channelid='UCFtKv_6mfX217yqegbHFAsw'
            data-layout='full'
            data-count='default'
          ></div>
        </div>
      </div>
    </section>
  );
}
