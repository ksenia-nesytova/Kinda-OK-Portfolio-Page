const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  alert("working")
});
