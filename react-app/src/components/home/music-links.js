import React from 'react';

export default function MusicLinks() {
  return (
    <section id='home-b' className='text-center bg-dark'>
      <div className='py-2'>
        <h2 className='section-title'>Music</h2>
        <div className='bottom-line'></div>
        <p className='lead'>
          Listen to our music on your favorite streaming platform.
        </p>
        <div className='grid'>
          <a
            href='https://open.spotify.com/artist/6AHLjmKMwEE0SZsMAydk56?si=o6HClVBPTKag-8r6f16wog'
            target='_blank'
          >
            <div className='grid-item'>
              <div>
                <i className='fab fa-spotify fa-2x'></i>
                <p>Spotify</p>
              </div>
            </div>
          </a>
          <a
            href='https://music.apple.com/us/artist/eugene-ilin/1493335563'
            target='_blank'
          >
            <div className='grid-item'>
              <div>
                <i className='fab fa-apple fa-2x'></i>
                <p>Apple Music</p>
              </div>
            </div>
          </a>
          <a
            href='https://www.deezer.com/artist/89486092?utm_source=deezer&utm_content=artist-89486092&utm_term=3564431044_1597776610&utm_medium=web'
            target='_blank'
          >
            <div className='grid-item'>
              <div>
                <i className='fab fa-deezer fa-2x'></i>
                <p>Deezer</p>
              </div>
            </div>
          </a>
          <a
            href='https://music.amazon.com/artists/B086GQ5YTL/eugene-ilin'
            target='_blank'
          >
            <div className='grid-item'>
              <div>
                <i className='fab fa-amazon fa-2x'></i>
                <p>Amazon Music</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
