import './BaseSendPopup.scss';

var open = document.querySelector('.send__button');
var popup = document.querySelector('.sendPopup__wrapper');
var close = document.querySelector('.sendPopup__close');
var popupBack = document.querySelector('.sendPopup__overlay');
var name = document.querySelector('.input__name');


open.addEventListener('click', () => {
  popup.style.display = "block";
  popupBack.style.display = "block";
})

close.addEventListener('click', () => {
  popup.style.display = "none";
  popupBack.style.display = "none";
})

popupBack.addEventListener('wheel', (e) => {
  e.stopPropagation();
  e.preventDefault();
})

popupBack.addEventListener('click', (e) => {
  if (!popup.contains(e.target)) {
    popup.style.display = "none";
    popupBack.style.display = "none";
  }
})
