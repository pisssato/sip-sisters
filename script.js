document.addEventListener('DOMContentLoaded', function () {
  console.log("toggle change start")
  const toggle = document.querySelector('.navbar .toggle');
  const toggleIcon = document.querySelector('.toggle i');
  const dropDown = document.querySelector('.dropdown_menu');

  toggle.addEventListener('click', function () {
    dropDown.classList.toggle('open');
    const isOpen = dropDown.classList.contains('open');
    toggleIcon.className = isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  });
});