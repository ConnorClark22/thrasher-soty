//Hamburger Menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
    //animate links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;

    });
}

navSlide();
















