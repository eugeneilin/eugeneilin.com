import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function footer() {
  return (
    <Fragment>
      <footer id='main-footer' class='bg-light'>
        <div class='footer-content container'>
          <p>&copy; 2020 All Rights Reserved.</p>
          <p>
            Designed and developed by
            <Link to='https://eugeneilin.dev/'>Eugene Ilin</Link>.
          </p>
          <div class='social'>
            <Link
              to='https://invite.viber.com/?g2=AQBosgzBe4Gx%2F0vZZwSd6Emw%2Fhd%2BBjJUMva83eEkMB3fIKm%2FDjNfSLhvp56Wcajz'
              target='_blank'
            >
              <i class='fab fa-viber'></i>
            </Link>
            <Link
              to='https://www.youtube.com/EugeneIlinOfficial'
              target='_blank'
            >
              <i class='fab fa-youtube'></i>
            </Link>
            <Link
              to='https://www.facebook.com/EugeneIlinsMusic'
              target='_blank'
            >
              <i class='fab fa-facebook'></i>
            </Link>
            <Link
              to='https://www.instagram.com/eugeneilinsmusic/'
              target='_blank'
            >
              <i class='fab fa-instagram'></i>
            </Link>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
