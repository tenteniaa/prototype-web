/* eslint-disable func-names */
const content = document.getElementsByClassName('up-content')[0];

window.addEventListener('scroll', function () {
  if (window.scrollY > 1) {
    content.classList.replace('d-none', 'up-appear');
  } else if (this.window.scrollY <= 0) {
    content.classList.replace('up-appear', 'd-none');
  }
});
