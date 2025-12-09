import { createIcons, icons } from 'lucide';

// Initialize Lucide Icons
createIcons({ icons });

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Change icon based on state
    const iconName = mobileMenu.classList.contains('active') ? 'X' : 'Menu';
    // Re-rendering icon logic would be complex with Lucide directly in DOM, 
    // simpler to just toggle opacity or class in CSS, but here we keep it simple.
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Scroll Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const elementsToReveal = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
elementsToReveal.forEach(el => observer.observe(el));

// Sticky Navbar on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 1)'; // Solid color on scroll
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)'; // Slightly transparent at top
        navbar.style.boxShadow = 'none';
    }
});