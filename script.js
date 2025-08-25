// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Project Section Toggle
function toggleSection(titleElement) {
    titleElement.classList.toggle('collapsed');
    const projectsGrid = titleElement.nextElementSibling;
    projectsGrid.classList.toggle('collapsed');
}

let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    body.style.setProperty('--dark', isDark ? '#0a192f' : '#f5f5f5');
    body.style.setProperty('--text', isDark ? '#8892b0' : '#2d3748');
    body.style.setProperty('--light', isDark ? '#ccd6f6' : '#2d3748');
    body.style.setProperty('--lighter', isDark ? '#e6f1ff' : '#1a202c');
    icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
});

// Navbar scroll effect
const nav = document.querySelector('.nav-container');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Experience cards hover effect
document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all elements that need animation
const animatedElements = [
    ...document.querySelectorAll('.experience-card'),
    ...document.querySelectorAll('.about-content > *'),
    document.querySelector('.hero-content')
].filter(Boolean);

animatedElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    element.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(element);
});

// Typing effect for hero section
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';
    
    let i = 0;
    const timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Apply typing effect to hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    setTimeout(() => {
        typeEffect(heroSubtitle, 100);
    }, 1000);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
