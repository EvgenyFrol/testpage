import './BaseFeedbackPopup.scss';

var feedbackOpen = document.querySelector('.feedback__button');
var feedbackPopup = document.querySelector('.feedbackPopup__wrapper');
var feedbackClose = document.querySelector('.feedbackPopup__close');
var feedbackOverlay = document.querySelector('.feedbackPopup__overlay');

feedbackOpen.addEventListener('click', () => {
  feedbackPopup.style.display = "block";
  feedbackOverlay.style.display = "block";

})

feedbackClose.addEventListener('click', () => {
  feedbackPopup.style.display = "none";
  feedbackOverlay.style.display = "none";
})

feedbackOverlay.addEventListener('wheel', (e) => {
  e.stopPropagation();
  e.preventDefault();
})

feedbackOverlay.addEventListener('click', (e) => {
  if (!feedbackPopup.contains(e.target)) {
    feedbackPopup.style.display = "none";
    feedbackOverlay.style.display = "none";
  }
})

document.getElementById("file").onchange = function () {
  document.getElementById("feedbackPopup__file").innerHTML = this.value;
};
