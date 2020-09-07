import './BaseCounter.scss';
import anime from 'animejs/lib/anime.es.js';

(function(){
  var end,start,targets;
  targets = document.querySelectorAll('.counter__score');

  targets.forEach(el => {
    end = el.dataset.end;
    start = el.dataset.start;
    anime({
      targets: el,
      innerHTML: [start, end],
      easing: 'easeInOutQuad',
      duration: 2000,
      round: 1 
    });
  });
})();
