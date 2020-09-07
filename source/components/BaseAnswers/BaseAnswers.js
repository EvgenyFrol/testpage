import './Baseanswers.scss';

const acc = document.querySelectorAll('.answers__card');

acc.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('answers__open')
  })
})
