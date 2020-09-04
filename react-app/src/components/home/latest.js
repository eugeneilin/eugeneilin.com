import React from 'react';

export default function Latest() {
  return (
    <section id='home-a' class='text-center bg-light'>
      <div class='container py-2'>
        <h2 class='section-title'>The Latest</h2>
        <div class='bottom-line'></div>
        <p class='lead'>Here is the latest upload.</p>
        <div class='youtube-embed-wrapper'>
          <iframe
            class='youtube-embed-item'
            src='https://www.youtube.com/embed/z4PUwscNskA?rel=0&autoplay=1&start=1'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <div class='youtube-sub'>
          <p>Subscribe to our YouTube channel here</p>
          <i class='fas fa-chevron-right fa-2x'></i>
          <div
            class='g-ytsubscribe'
            data-channelid='UCFtKv_6mfX217yqegbHFAsw'
            data-layout='full'
            data-count='default'
          ></div>
        </div>
      </div>
    </section>
  );
}
