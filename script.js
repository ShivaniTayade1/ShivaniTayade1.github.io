// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeHero();
    initializeSkills();
    initializeExperience();
    initializeProjects();
    initializeContact();
    initializeAnimations();
    initializeScrollEffects();
    
    // Start initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
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

    // Active navigation highlighting - defined globally for performance optimization
    window.updateActiveNav = function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    // Navbar background change on scroll - defined globally for performance optimization
    window.updateNavbarBackground = function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    };
}

// Hero section functionality
function initializeHero() {
    // Typing animation for hero title (skip if contains HTML)
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        const containsHTML = heroTitle.innerHTML !== originalText;
        
        if (!containsHTML) {
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            setTimeout(typeWriter, 1000);
        } else {
            // Just add a fade-in animation for HTML content
            heroTitle.style.opacity = '0';
            setTimeout(() => {
                heroTitle.style.transition = 'opacity 1s ease-in-out';
                heroTitle.style.opacity = '1';
            }, 500);
        }
    }

    // Animated counters for hero stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
        const suffix = finalValue.replace(/[\d.]/g, '');
        
        if (!isNaN(numericValue)) {
            animateCounter(stat, numericValue, suffix);
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.3;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Skills section functionality
function initializeSkills() {
    const skillNavBtns = document.querySelectorAll('.skill-nav-btn');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all buttons and categories
            skillNavBtns.forEach(b => b.classList.remove('active'));
            skillCategories.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding category
            this.classList.add('active');
            const targetCategory = document.getElementById(category);
            if (targetCategory) {
                targetCategory.classList.add('active');
                
                // Animate skill bars
                const skillBars = targetCategory.querySelectorAll('.level-fill');
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.width || '0%';
                    }, index * 100);
                });
            }
        });
    });

    // Intersection Observer for skill bars animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.level-fill');
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const width = bar.style.width || '0%';
                        bar.style.width = width;
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });
}

// Experience section functionality
function initializeExperience() {
    const companyCards = document.querySelectorAll('.company-card');
    const experienceContents = document.querySelectorAll('.experience-content');
    
    if (companyCards.length === 0 || experienceContents.length === 0) {
        console.warn('Experience section elements not found');
        return;
    }
    
    companyCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Remove active class from all cards and contents
            companyCards.forEach(c => c.classList.remove('active'));
            experienceContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.add('active');
            } else {
                console.error('Content not found for target:', target);
            }
        });
    });
    
    // Set first card as active by default
    if (companyCards.length > 0) {
        const firstCard = companyCards[0];
        const firstTarget = firstCard.getAttribute('data-target');
        
        firstCard.classList.add('active');
        const firstContent = document.getElementById(firstTarget);
        if (firstContent) {
            firstContent.classList.add('active');
        } else {
            console.error('First content not found for target:', firstTarget);
        }
    }
}

// Projects section functionality
function initializeProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Animate project metrics on scroll
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metrics = entry.target.querySelectorAll('.impact-number');
                metrics.forEach((metric, index) => {
                    setTimeout(() => {
                        animateMetric(metric);
                    }, index * 300);
                });
            }
        });
    }, { threshold: 0.5 });

    projectCards.forEach(card => {
        projectObserver.observe(card);
    });
}

// Contact form functionality
function initializeContact() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Animation functionality
function initializeAnimations() {
    // Fade in animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for fade animation
    const elementsToAnimate = document.querySelectorAll(
        '.story-section, .achievement-card, .timeline-item, .project-card, .skill-item, .soft-skill-item, .leadership-showcase, .contact-card'
    );
    
    elementsToAnimate.forEach(element => {
        fadeObserver.observe(element);
    });

    // Hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('disabled')) {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            scrollIndicator.style.opacity = scrolled > 100 ? '0' : '1';
        });
    }

    // Header size adjustment on scroll
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const scale = Math.max(0.8, 1 - scrolled * 0.0002);
            heroTitle.style.transform = `scale(${scale})`;
        });
    }
}

// Utility functions
function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current) + suffix;
        
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        }
    }, 16);
}

function animateMetric(element) {
    const originalText = element.textContent;
    const numericValue = parseFloat(originalText.replace(/[^\d.]/g, ''));
    const suffix = originalText.replace(/[\d.]/g, '');
    
    if (!isNaN(numericValue)) {
        let current = 0;
        const increment = numericValue / 50;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current) + suffix;
            
            if (current >= numericValue) {
                element.textContent = originalText;
                clearInterval(timer);
            }
        }, 30);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        opacity: 0;
        transform: translateY(-20px) scale(0.9);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0) scale(1)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px) scale(0.9)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
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

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Print functionality
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

// Loading animation
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }
    
    // Trigger entrance animations
    document.body.classList.add('loaded');
});

// Social media sharing
function shareOnSocial(platform, url, text) {
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Performance optimizations
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01s');
        // Disable parallax and other motion effects
        const heroPattern = document.querySelector('.hero-pattern');
        if (heroPattern) {
            heroPattern.style.animation = 'none';
        }
    }
    
    // Optimize scroll listeners
    let ticking = false;
    
    function updateOnScroll() {
        updateActiveNav();
        updateNavbarBackground();
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Simplified animation functions for better performance
function animateCounter(element, target, suffix = '') {
    const duration = 1000; // Reduced from 2000ms
    const steps = 30; // Reduced steps for better performance
    const increment = target / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
        current += increment;
        step++;
        element.textContent = Math.floor(current) + suffix;
        
        if (step >= steps) {
            element.textContent = target + suffix;
            clearInterval(timer);
        }
    }, duration / steps);
}

function animateMetric(element) {
    const originalText = element.textContent;
    const numericValue = parseFloat(originalText.replace(/[^\d.]/g, ''));
    const suffix = originalText.replace(/[\d.]/g, '');
    
    if (!isNaN(numericValue)) {
        let current = 0;
        const steps = 20; // Reduced steps
        const increment = numericValue / steps;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current) + suffix;
            
            if (current >= numericValue) {
                element.textContent = originalText;
                clearInterval(timer);
            }
        }, 50); // Faster animation
    }
}

// Optimized debounce function
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

// Reduce animation complexity
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                fadeObserver.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);

    // Observe only essential elements
    const elementsToAnimate = document.querySelectorAll(
        '.achievement-card, .project-card, .company-card'
    );
    
    elementsToAnimate.forEach(element => {
        fadeObserver.observe(element);
    });

    // Simplified hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('disabled')) {
                this.style.transform = 'translateY(-1px)';
            }
        }, { passive: true });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        }, { passive: true });
    });
}

// Optimized scroll effects
function initializeScrollEffects() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        const handleScroll = debounce(() => {
            const scrolled = window.pageYOffset;
            scrollIndicator.style.opacity = scrolled > 100 ? '0' : '1';
        }, 16); // 60fps
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
}

// Simplified hero initialization
function initializeHero() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        const containsHTML = heroTitle.innerHTML !== originalText;
        
        if (!containsHTML) {
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 30); // Faster typing
                }
            };
            
            setTimeout(typeWriter, 300); // Reduced delay
        } else {
            heroTitle.style.opacity = '0';
            setTimeout(() => {
                heroTitle.style.transition = 'opacity 0.5s ease-in-out';
                heroTitle.style.opacity = '1';
            }, 200); // Reduced delay
        }
    }

    // Simplified counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
        const suffix = finalValue.replace(/[\d.]/g, '');
        
        if (!isNaN(numericValue)) {
            animateCounter(stat, numericValue, suffix);
        }
    });
}

// Remove heavy parallax effect
// Parallax effect removed for better performance

// Simplified contact form
function initializeContact() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000); // Reduced delay
        });
    }
}

// Optimized notification system
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: 'all 0.3s ease',
        maxWidth: '350px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    });
    
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    });
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000); // Reduced display time
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Error handling
window.addEventListener('error', function(e) {
    console.error('Portfolio error:', e.error);
    // Could send to analytics or error reporting service
});

// Service worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        debounce,
        animateCounter,
        showNotification
    };
}
