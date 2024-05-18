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
        navbar.classList.remove('mobile');
    })
})

const btn = document.querySelector('button');

document.querySelector('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_sl740ds';
   const templateID = 'template_9zbykb3';
 
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Sending...';
      alert('Thanks, I have received your message!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


