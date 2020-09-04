import React from 'react';
import { Link } from 'react-router-dom';

export default function MusicLinks() {
  return (
    <section id='home-b' class='text-center bg-dark'>
      <div class='py-2'>
        <h2 class='section-title'>Music</h2>
        <div class='bottom-line'></div>
        <p class='lead'>
          Listen to our music on your favorite streaming platform.
        </p>
        <div class='grid'>
          <Link
            to='https://open.spotify.com/artist/6AHLjmKMwEE0SZsMAydk56?si=o6HClVBPTKag-8r6f16wog'
            target='_blank'
          >
            <div class='grid-item'>
              <div>
                <i class='fab fa-spotify fa-2x'></i>
                <p>Spotify</p>
              </div>
            </div>
          </Link>
          <Link
            to='https://music.apple.com/us/artist/eugene-ilin/1493335563'
            target='_blank'
          >
            <div class='grid-item'>
              <div>
                <i class='fab fa-apple fa-2x'></i>
                <p>Apple Music</p>
              </div>
            </div>
          </Link>
          <Link
            to='https://www.deezer.com/artist/89486092?utm_source=deezer&utm_content=artist-89486092&utm_term=3564431044_1597776610&utm_medium=web'
            target='_blank'
          >
            <div class='grid-item'>
              <div>
                <i class='fab fa-deezer fa-2x'></i>
                <p>Deezer</p>
              </div>
            </div>
          </Link>
          <Link
            to='https://music.amazon.com/artists/B086GQ5YTL/eugene-ilin'
            target='_blank'
          >
            <div class='grid-item'>
              <div>
                <i class='fab fa-amazon fa-2x'></i>
                <p>Amazon Music</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
