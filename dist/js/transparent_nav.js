// Navbar Transparency and Sliding Effect Controls
const navbar = document.getElementById('main-nav');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-120px)';
    }

    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 250);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};
