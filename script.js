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


const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for your message, Rodas! I'll get back to you soon.");
  form.reset();
});

const text = "Web Developer";
let i = 0;
const target = document.querySelector(".hero h3 span");

function type() {
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(type, 200);
  }
}
type();
