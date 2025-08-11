// Close menu when clicking outside or on a menu item
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.querySelectorAll('nav ul li a');

    // Close menu when clicking a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const nav = document.querySelector('nav');
        if (!nav.contains(e.target) && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.checked = false;
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If validation passes, you can add code here to handle the form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Email validation helper function
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
