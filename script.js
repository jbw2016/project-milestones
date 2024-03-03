//Function to toggle a navigation menu on small screens
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Event listener for the navigation menu toggle button
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
}

// This is the call to the button for scrolling
let mybutton = document.getElementById("myBtn");

// This allows for the page to scroll to top after button is clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Function to validate a contact form
function validateContactForm() {
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (fnameInput.value === '' ||lnameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill out all fields in the contact form.');
        return false;
    }

    return true;
}

// Event listener for the contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        if (validateContactForm()) {
            alert('Contact form submitted successfully!');
            // You can add code here to send the form data to a server
        }
    });
}