// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupInteractivity();
});

// Initialize animations
function initializeAnimations() {
    console.log('Sirvato Sistema - Site Initialized');
    
    // Add observer for elements entering viewport
    observeElements();
}

// Observe elements for animation triggers
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.robot, .logo-section').forEach(el => {
        observer.observe(el);
    });
}

// Setup interactive features
function setupInteractivity() {
    // Add hover effects to robots
    const robots = document.querySelectorAll('.robot');
    
    robots.forEach(robot => {
        robot.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        robot.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click interaction to logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.animationDuration = '5s';
            setTimeout(() => {
                this.style.animationDuration = '20s';
            }, 5000);
        });
    }

    // Smooth transitions
    addSmoothTransitions();
}

// Add smooth CSS transitions
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        .robot, .logo {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    console.log('Window resized - layout adjusted');
}, 250));

// Log analytics (optional tracking)
function trackPageView() {
    if (typeof window !== 'undefined') {
        console.log('Page view tracked - Sirvato Sistema');
    }
}

trackPageView();