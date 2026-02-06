/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const Linkaction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', Linkaction))
/*=============== HOME TYPED JS ===============*/
var typed = new Typed('#home-subtitle', {
    strings: ['Developer', 'Webdesigner', 'Fronted manager'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 50,
    backDelay: 2000,
    cursorChar: '🦆',
});

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY > 50 ? header.classList.add('shadow-header') :
        header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/

const contactFrom = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault
    emailjs.sendForm('service_rz0ofi1', 'template_74yde49', '#contact-form', '2wdZeM2a3phUPdOaT').then(
        (response) => {
            contactMessage.textContent = "Message sent successfully ✅"
        },
        (error) => {
            contactMessage.textContent = "Message not sent (service error) ❌"
        },
    );
}

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
