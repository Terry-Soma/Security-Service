const body = document.body;
let lastScroll = 0;
let nav = document.getElementById('nav');
let navpos = nav.offsetTop;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove('scroll-up');
    return;
  }
  if (currentScroll >= 400) {
    nav.classList.remove('hide');
  } else if (currentScroll < 500) {
    nav.classList.add('hide');
  }

  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains('scroll-down')
  ) {
    body.classList.remove('scroll-down');
    body.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});
