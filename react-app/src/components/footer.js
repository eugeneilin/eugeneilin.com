import React, { Fragment } from 'react';

export default function footer() {
  return (
    <Fragment>
      <footer id='main-footer' class='bg-light'>
        <div class='footer-content container'>
          <p>&copy; 2020 All Rights Reserved.</p>
          <p>
            Designed and developed by
            <a href='https://eugeneilin.dev/'>Eugene Ilin</a>.
          </p>
          <div class='social'>
            <a
              href='https://invite.viber.com/?g2=AQBosgzBe4Gx%2F0vZZwSd6Emw%2Fhd%2BBjJUMva83eEkMB3fIKm%2FDjNfSLhvp56Wcajz'
              target='_blank'
            >
              <i class='fab fa-viber'></i>
            </a>
            <a
              href='https://www.youtube.com/EugeneIlinOfficial'
              target='_blank'
            >
              <i class='fab fa-youtube'></i>
            </a>
            <a href='https://www.facebook.com/EugeneIlinsMusic' target='_blank'>
              <i class='fab fa-facebook'></i>
            </a>
            <a
              href='https://www.instagram.com/eugeneilinsmusic/'
              target='_blank'
            >
              <i class='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
