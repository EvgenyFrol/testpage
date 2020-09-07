import './BaseMenu.scss';

var menu = document.querySelector(".menu");
var button = document.querySelector(".button-menu");
var header = document.querySelector('.header');
var close = document.querySelector('.menu__image');
var link = document.querySelectorAll('a[href^="#"]');
var burger = document.querySelector('.burger-button');
var closeIcon = document.querySelector('.buttonMenu__close');

const toggle = document.querySelector('.js-toggleMenu');

//при нажатии на кнопку открываем меню

button.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

// при открытом меню по клику вне его области закрываем его

document.addEventListener('click', (e) => {
  if (menu.classList.contains('menu--open')) {
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.toggle('menu--open');
    }
  }
})

// при открытом меню по клику вне его при нажатии на кнопку с крестом

close.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
})


// добавляем плавную прокрутку при скролле

link.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    if (window.innerWidth <= 640) {
      menu.classList.toggle('menu--open');
    }

    const id = item.getAttribute('href');
    const linkId = document.querySelector(id);

    linkId.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  })
})
