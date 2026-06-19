// Cache DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

/* ==========================================
   1. Dynamic Scroll Styling Transitions
   ========================================== */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ==========================================
   2. Mobile Hamburger Menu System
   ========================================== */
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinksContainer.classList.toggle('active');
});

// Auto close flyout overlay after clicking links
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinksContainer.classList.remove('active');
    });
});

/* ==========================================
   3. Real-Time Tracking Link Highlight (Scroll-Spy)
   ========================================== */
window.addEventListener('scroll', () => {
    let currentSectionId = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // 160px offset safety margin accounts for top-pinned navbar elements
        if (window.scrollY >= (sectionTop - 160)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(currentSectionId)) {
            item.classList.add('active');
        }
    });
});