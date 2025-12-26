/**
 * STEWARDSHIP ANALYTICS - JAVASCRIPT
 * Handles mobile menu, smooth scrolling, and form submission
 */

// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for internal anchors (not "#")
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80; // Account for sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// CONTACT FORM SUBMISSION (FormSubmit AJAX)
// ============================================
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = document.getElementById('submit-btn');
    const loadingMsg = document.getElementById('form-loading');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    
    // Reset messages
    loadingMsg.classList.remove('hidden');
    successMsg.classList.add('hidden');
    errorMsg.classList.add('hidden');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success
            form.reset();
            successMsg.classList.remove('hidden');
            loadingMsg.classList.add('hidden');
            submitBtn.textContent = 'Request Free Audit';
            
            // Hide success message after 8 seconds
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 8000);
        } else {
            // Error response
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // Network or other error
        console.error('Form submission error:', error);
        errorMsg.classList.remove('hidden');
        loadingMsg.classList.add('hidden');
        submitBtn.textContent = 'Request Free Audit';
        
        // Hide error message after 10 seconds
        setTimeout(() => {
            errorMsg.classList.add('hidden');
        }, 10000);
    } finally {
        submitBtn.disabled = false;
    }
});

// ============================================
// SCROLL ANIMATIONS (Optional Enhancement)
// ============================================
// Add fade-in animation for cards as they enter viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to cards that should animate in
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.pain-card, .benefit-card, .testimonial-card, .process-step');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

