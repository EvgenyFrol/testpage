import './BaseContacts.scss';

const linksData = document.querySelectorAll('.contacts__item');
const parData = document.querySelectorAll('.contacts__data');
console.log(linksData);



linksData.forEach((item) => {
  if (item.hasAttribute('href')) {
    var newEl = document.createElement('a');
    newEl.classList.add('contacts__item');

    item.parentElement.insertBefore(newEl, item);

    let text = item.textContent;

    for (var i = 0, attrs = item.attributes, count = attrs.length; i < count; ++i)
    newEl.setAttribute(attrs[i].name, attrs[i].value);

    newEl.innerHTML = text;

    item.parentNode.removeChild(item);

    if (item.textContent === null) {
      item.parentNode.removeChild(item);
    }
  }
})
