import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';
// Icons (Git, Linkedin)
import './vendor/fontello/css/fontello.css'

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

$("#contact_form").on('submit', function(event){
  event.preventDefault();
  $('#contact_form').trigger('reset');
});

initSr();
initTilt();
