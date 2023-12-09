// scripts.js

// Example of a smooth scroll function for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example function to toggle a class for a responsive navigation menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('is-active');
}

// Add event listener for document ready if needed
document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the document is fully loaded
});

// Add additional JavaScript and interactivity as needed
