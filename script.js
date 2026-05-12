document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupInteractivity();
});

function initializeAnimations() {
    console.log('Sirvato Sistema - Animazioni inizializzate');
    observeElements();
}

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

    document.querySelectorAll('.robot, .logo-section').forEach(el => {
        observer.observe(el);
    });
}

function setupInteractivity() {
    const robots = document.querySelectorAll('.robot');
    
    robots.forEach(robot => {
        robot.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        robot.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        robot.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 100);
        });
    });

    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.animationDuration = '5s';
            setTimeout(() => {
                this.style.animationDuration = '20s';
            }, 5000);
        });
    }

    addSmoothTransitions();
}

function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        .robot, .logo {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

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

window.addEventListener('resize', debounce(function() {
    console.log('Layout adattato al nuovo viewport');
}, 250));

function trackPageView() {
    if (typeof window !== 'undefined') {
        console.log('Sirvato Sistema - Sito caricato');
    }
}

trackPageView();