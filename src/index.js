import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';
// Icons (Git, Linkedin)
import './vendor/fontello/css/fontello.css';
// Sitemap
import './sitemap.xml';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});


initSr();
initTilt();
