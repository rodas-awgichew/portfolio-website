const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll("#navMenu a");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

 
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});



