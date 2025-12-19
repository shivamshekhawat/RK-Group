// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    // Add animation delay variables to menu items
    const menuItems = document.querySelectorAll('.nav-menu li');
    menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-play slider
setInterval(nextSlide, 5000);

// Navigation buttons
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .company-card, .highlight-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Gallery auto-scroll pause on hover
const galleryTrack = document.querySelector('.gallery-track');
if (galleryTrack) {
    galleryTrack.addEventListener('mouseenter', () => {
        galleryTrack.style.animationPlayState = 'paused';
    });
    
    galleryTrack.addEventListener('mouseleave', () => {
        galleryTrack.style.animationPlayState = 'running';
    });
}

// Customer slider pause on hover
const customersTrack = document.querySelector('.customers-track');
if (customersTrack) {
    customersTrack.addEventListener('mouseenter', () => {
        customersTrack.style.animationPlayState = 'paused';
    });
    
    customersTrack.addEventListener('mouseleave', () => {
        customersTrack.style.animationPlayState = 'running';
    });
}

// CTA Button interactions
document.querySelectorAll('.cta-btn, .product-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS and responsive utilities
const style = document.createElement('style');
style.textContent = `
    /* Loading state */
    body.loading {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body:not(.loading) {
        opacity: 1;
    }
    .cta-btn, .product-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Enhanced mobile styles */
    @media (max-width: 768px) {
        /* Ensure proper text sizing */
        html {
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
        }
        
        /* Improve button accessibility */
        button, .btn, .cta-btn, .product-btn {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
        }
        
        /* Fix for viewport units on mobile */
        .hero-slider {
            height: 100vh;
            height: calc(var(--vh, 1vh) * 100);
            min-height: 500px;
        }
    }
    
    /* Mobile viewport height fix */
    .hero-slider {
        height: calc(var(--vh, 1vh) * 100);
        min-height: 500px;
    }
    
    /* Prevent horizontal scroll on mobile */
    body {
        overflow-x: hidden;
    }
    
    /* Improve touch targets on mobile */
    @media (max-width: 768px) {
        .nav-menu a,
        .cta-btn,
        .product-btn,
        .booking-btn {
            min-height: 44px;
            min-width: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        /* Ensure proper spacing for mobile elements */
        .slide-content {
            padding: 20px !important;
            margin: 0 auto;
            max-width: calc(100% - 40px);
        }
        
        .product-showcase {
            margin: 0 10px;
            padding: 20px 15px !important;
        }
        
        .container {
            padding: 0 15px !important;
        }
    }
`;
document.head.appendChild(style);

// About Section Scooter Image Rotation
const scooterImages = [
    'Images/power-removebg-preview.png',
    'Images/Grace-removebg-preview.png',
    'Images/winner-removebg-preview.png',
    'Images/power_2-removebg-preview.png'
];

let currentScooterIndex = 0;
const aboutScooterImage = document.getElementById('aboutScooterImage');

if (aboutScooterImage) {
    // Ensure initial image is visible
    aboutScooterImage.style.opacity = '1';
    
    function rotateScooterImage() {
        currentScooterIndex = (currentScooterIndex + 1) % scooterImages.length;
        
        // Fade out
        aboutScooterImage.style.opacity = '0';
        
        // Change image and fade in after transition
        setTimeout(() => {
            aboutScooterImage.src = scooterImages[currentScooterIndex];
            aboutScooterImage.alt = scooterImages[currentScooterIndex].split('/').pop().replace('.jpg', '');
            aboutScooterImage.style.opacity = '1';
        }, 300);
    }
    
    // Rotate scooter image every 4 seconds
    setInterval(rotateScooterImage, 4000);
}

// Model Slider Functionality
let currentModelSlide = 0;
let isTransitioning = false;
const modelSlides = document.querySelectorAll('.model-slide');
let modelDots = document.querySelectorAll('.model-dot');
const totalModelSlides = modelSlides.length;

// Create model dots if they don't exist
if (modelSlides.length > 0 && modelDots.length === 0) {
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'model-slider-dots';
    
    for (let i = 0; i < totalModelSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'model-dot';
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
    
    const modelSliderContainer = document.querySelector('.model-slider');
    if (modelSliderContainer) {
        modelSliderContainer.appendChild(dotsContainer);
        modelDots = document.querySelectorAll('.model-dot');
    }
}

function showModelSlide(index, direction = 'next') {
    if (isTransitioning || index === currentModelSlide) return;
    isTransitioning = true;
    
    const prevIndex = currentModelSlide;
    const prevDescription = modelSlides[prevIndex]?.querySelector('.model-description');
    const newDescription = modelSlides[index]?.querySelector('.model-description');
    
    // Update model name
    const currentModelName = document.getElementById('current-model-name');
    const newModelName = modelSlides[index]?.getAttribute('data-model');
    if (currentModelName && newModelName) {
        currentModelName.textContent = newModelName;
    }
    
    // Remove active class from current slide and description
    if (modelSlides[prevIndex]) {
        modelSlides[prevIndex].classList.remove('active');
        if (prevDescription) {
            prevDescription.classList.remove('active');
        }
        if (direction === 'next') {
            modelSlides[prevIndex].classList.add('prev');
        }
    }
    
    // Position new slide off-screen based on direction
    if (direction === 'next') {
        modelSlides[index].style.transform = 'translateX(100%)';
    } else {
        modelSlides[index].style.transform = 'translateX(-100%)';
    }
    
    // Hide new description initially
    if (newDescription) {
        newDescription.classList.remove('active');
    }
    
    // Force reflow and then animate
    modelSlides[index].offsetHeight;
    
    // Add active class and animate to center
    modelSlides[index].classList.add('active');
    modelSlides[index].style.transform = 'translateX(0)';
    
    // Show new description with slight delay for smooth transition
    setTimeout(() => {
        if (newDescription) {
            newDescription.classList.add('active');
        }
    }, 100);
    
    // Update dots
    modelDots.forEach(dot => dot.classList.remove('active'));
    if (modelDots[index]) {
        modelDots[index].classList.add('active');
    }
    
    currentModelSlide = index;
    
    // Reset transition lock and clean up prev class
    setTimeout(() => {
        isTransitioning = false;
        if (modelSlides[prevIndex]) {
            modelSlides[prevIndex].classList.remove('prev');
            modelSlides[prevIndex].style.transform = '';
        }
        modelSlides[index].style.transform = '';
    }, 800);
}

function nextModelSlide() {
    const nextIndex = (currentModelSlide + 1) % totalModelSlides;
    showModelSlide(nextIndex, 'next');
}

function prevModelSlide() {
    const prevIndex = (currentModelSlide - 1 + totalModelSlides) % totalModelSlides;
    showModelSlide(prevIndex, 'prev');
}

// Initialize model slider if elements exist
if (modelSlides.length > 0) {
    // Set initial slide position
    modelSlides.forEach((slide, index) => {
        const description = slide.querySelector('.model-description');
        if (index === 0) {
            slide.classList.add('active');
            slide.style.transform = 'translateX(0)';
            if (description) {
                description.classList.add('active');
            }
        } else {
            slide.style.transform = 'translateX(100%)';
            if (description) {
                description.classList.remove('active');
            }
        }
    });
    
    // Auto-play model slider
    setInterval(nextModelSlide, 5000);
    
    // Navigation buttons
    const modelNextBtn = document.querySelector('.model-next-btn');
    const modelPrevBtn = document.querySelector('.model-prev-btn');
    
    if (modelNextBtn) {
        modelNextBtn.addEventListener('click', nextModelSlide);
    }
    
    if (modelPrevBtn) {
        modelPrevBtn.addEventListener('click', prevModelSlide);
    }
    
    // Dot navigation
    modelDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const direction = index > currentModelSlide ? 'next' : 'prev';
            showModelSlide(index, direction);
        });
    });
    
    // Touch support for mobile
    let startX = 0;
    let endX = 0;
    
    const modelSliderContainer = document.querySelector('.model-slider-container');
    if (modelSliderContainer) {
        modelSliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        modelSliderContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextModelSlide();
                } else {
                    prevModelSlide();
                }
            }
        });
    }
}

// Responsive image loading
function handleResponsiveImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Skip logo and gallery images
        if (img.closest('.nav-logo') || img.closest('.gallery-grid') || img.closest('.model-slide')) return;
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            img.style.opacity = '0.5';
            console.warn('Failed to load image:', img.src);
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
}

document.addEventListener('DOMContentLoaded', handleResponsiveImages);

// Viewport height fix for mobile browsers
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', () => {
    setTimeout(setViewportHeight, 100);
});
setViewportHeight();

// Fix for iOS Safari bottom bar
function updateViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Additional fix for mobile browsers
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider && window.innerWidth <= 768) {
        heroSlider.style.height = `${window.innerHeight}px`;
    }
}

window.addEventListener('load', updateViewportHeight);
window.addEventListener('resize', updateViewportHeight);

// Prevent zoom on double tap for iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = new Date().getTime();
    const timeSince = now - lastTouchEnd;
    
    if ((timeSince < 300) && (timeSince > 0)) {
        e.preventDefault();
    }
    
    lastTouchEnd = now;
}, false);

// Smooth scroll behavior for mobile
function smoothScrollToSection(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Enhanced mobile experience
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to prevent flash of unstyled content
    document.body.classList.add('loading');
    
    // Remove loading class after everything is loaded
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });
    
    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
        img.decoding = 'async';
    });
});