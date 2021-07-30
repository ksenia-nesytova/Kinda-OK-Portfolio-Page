const navToggle = document.getElementById('nav-toggle');

const nav = document.getElementsByClassName('nav');

navToggle.addEventListener('click', () => {
  nav.classList.add('nav-open');
  alert("working")
});


navToggle.addEventListener('click', () => {
  nav.classList.remove('nav-open');
  alert("working")
});
