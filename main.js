// handle menu
const menuIcon = document.getElementById('menu');
const navbar = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
menuIcon.addEventListener('click', () => {
    if(navbar.classList.contains('mobile')) {
        navbar.classList.remove('mobile');
    } else {
        navbar.classList.add('mobile');
    }
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        })
        link.classList.add('active');
    })
})