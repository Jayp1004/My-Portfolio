// JavaScript for Jay's Portfolio

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle active class for navbar links
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Contact form submission handling
// const contactForm = document.querySelector('.contact-form form');
// contactForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const formData = new FormData(contactForm);
//     const data = Object.fromEntries(formData.entries());

//     console.log('Form submitted:', data);

//     // Display a success message
//     const successMessage = document.createElement('p');
//     successMessage.textContent = 'Thank you for your message!';
//     successMessage.style.color = 'green';
//     contactForm.appendChild(successMessage);

//     // Clear the form
//     contactForm.reset();

//     // Remove the success message after 3 seconds
//     setTimeout(() => {
//         successMessage.remove();
//     }, 3000);
// });

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.fontSize = '20px';
scrollToTopBtn.style.backgroundColor = 'orangered';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.zIndex = '1000';

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
