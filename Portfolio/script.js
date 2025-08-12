
//dark mode 

const darkmoonIcon= document.querySelector('#darkMode-icon');
darkmoonIcon.addEventListener('click',()=>{
    darkmoonIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});

//responsive nav

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//to close the navbar if any of the links were selected

const navLink = document.querySelectorAll(".active");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}





