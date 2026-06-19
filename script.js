
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');



window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinksContainer.classList.toggle('active');
});



navItems.forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinksContainer.classList.remove('active');
    });
});



window.addEventListener('scroll', () => {
    let currentSectionId = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
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