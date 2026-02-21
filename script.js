/**
 * =============================================
 * DAVOOD SULIAMAN – PORTFOLIO JAVASCRIPT
 * Features:
 *  - Sticky navbar with scroll detection
 *  - Hamburger mobile menu
 *  - Typed text animation (Hero)
 *  - Scroll reveal animations
 *  - Skill bar animation (on viewport entry)
 *  - Active nav link highlighting
 *  - Contact form validation
 *  - Scroll-to-top button
 *  - Dynamic footer year
 * =============================================
 */

'use strict';

/* ==================== DOM ELEMENTS ==================== */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm  = document.getElementById('contactForm');
const yearEl       = document.getElementById('year');
const typedEl      = document.getElementById('typed-text');

/* ==================== FOOTER YEAR ==================== */
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ==================== TYPED TEXT ANIMATION ==================== */
(function initTypedText() {
  if (!typedEl) return;

  const phrases = [
    'Frontend Developer',
    'UI/UX Enthusiast',
    'React Developer',
    'Responsive Design Lover',
  ];

  let phraseIndex  = 0;
  let charIndex    = 0;
  let isDeleting   = false;
  let isPaused     = false;

  const TYPING_SPEED   = 90;
  const DELETING_SPEED = 50;
  const PAUSE_TIME     = 1800;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      isPaused = false;
      isDeleting = true;
      setTimeout(type, PAUSE_TIME);
      return;
    }

    if (!isDeleting) {
      typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        isPaused = true;
        setTimeout(type, PAUSE_TIME);
        return;
      }
    } else {
      typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    setTimeout(type, speed);
  }

  setTimeout(type, 800);
})();

/* ==================== NAVBAR SCROLL ==================== */
(function initNavbar() {
  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();

/* ==================== ACTIVE NAV LINK (Intersection Observer) ==================== */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinkItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinkItems.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach((sec) => observer.observe(sec));
})();

/* ==================== HAMBURGER MENU ==================== */
(function initHamburger() {
  if (!hamburger || !navLinks) return;

  function toggleMenu() {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close on nav link click
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on backdrop click (outside menu)
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ==================== SCROLL REVEAL ==================== */
(function initScrollReveal() {
  // Add reveal class to section children
  const revealTargets = document.querySelectorAll(
    '.skill-card, .project-card, .service-card, ' +
    '.about-image-wrapper, .about-content, ' +
    '.section-header, .contact-info, .contact-form, ' +
    '.stat-item, .tool-tag, .contact-item, .footer-grid > *'
  );

  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
    observer.observe(el);
  });
})();

/* ==================== SKILL BAR ANIMATION ==================== */
(function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  if (!skillBars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width') || '0';
        setTimeout(() => {
          bar.style.width = `${targetWidth}%`;
        }, 200);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach((bar) => observer.observe(bar));
})();

/* ==================== SCROLL TO TOP BUTTON ==================== */
(function initScrollTop() {
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ==================== CONTACT FORM VALIDATION ==================== */
(function initContactForm() {
  if (!contactForm) return;

  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError    = document.getElementById('nameError');
  const emailError   = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccess  = document.getElementById('formSuccess');
  const submitText   = document.getElementById('submitText');
  const submitBtn    = contactForm.querySelector('button[type="submit"]');

  /**
   * Validate a single field and show/clear error
   * @param {HTMLElement} input
   * @param {HTMLElement} errorEl
   * @param {string} message
   * @param {boolean} condition - true if valid
   * @returns {boolean}
   */
  function validate(input, errorEl, condition, message) {
    if (!condition) {
      input.classList.add('error');
      if (errorEl) errorEl.textContent = message;
      return false;
    }
    input.classList.remove('error');
    if (errorEl) errorEl.textContent = '';
    return true;
  }

  /** Simple email regex validator */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  /** Clear errors on input change */
  [nameInput, emailInput, messageInput].forEach((el) => {
    if (!el) return;
    el.addEventListener('input', () => {
      el.classList.remove('error');
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = nameInput?.value.trim()    || '';
    const email   = emailInput?.value.trim()   || '';
    const message = messageInput?.value.trim() || '';

    // Validate all fields
    const nameValid    = validate(nameInput, nameError, name.length >= 2, 'Please enter your full name (at least 2 characters).');
    const emailValid   = validate(emailInput, emailError, isValidEmail(email), 'Please enter a valid email address.');
    const messageValid = validate(messageInput, messageError, message.length >= 20, 'Your message should be at least 20 characters long.');

    if (!nameValid || !emailValid || !messageValid) {
      // Scroll to first error
      contactForm.querySelector('.error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Simulate form submission (replace with your backend / EmailJS logic)
    submitBtn.disabled = true;
    if (submitText) submitText.textContent = 'Sending…';

    setTimeout(() => {
      // Reset form
      contactForm.reset();
      submitBtn.disabled = false;
      if (submitText) submitText.textContent = 'Send Message';

      // Show success message
      if (formSuccess) {
        formSuccess.style.display = 'flex';
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 5000);
      }
    }, 1600);
  });
})();

/* ==================== SMOOTH SCROLL FOR NAV LINKS ==================== */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ==================== COUNTER ANIMATION (Stats) ==================== */
(function initCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  if (!statNums.length) return;

  function animateCounter(el) {
    const text = el.textContent.trim();
    // Only animate purely numeric values
    const numMatch = text.match(/^(\d+)(\+)?$/);
    if (!numMatch) return;

    const target  = parseInt(numMatch[1], 10);
    const suffix  = numMatch[2] || '';
    const duration = 1200;
    const stepTime = 16;
    const steps    = Math.round(duration / stepTime);
    let current    = 0;
    let step       = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = Math.round(progress * target);
      el.textContent = current + suffix;
      if (step >= steps) {
        clearInterval(timer);
        el.textContent = target + suffix;
      }
    }, stepTime);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach((el) => observer.observe(el));
})();

/* ==================== PROJECT CARD TILT (subtle) ==================== */
(function initCardTilt() {
  if (window.matchMedia('(hover: none)').matches) return; // Skip on touch devices

  document.querySelectorAll('.project-card, .service-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const centerX = rect.width  / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) *  4;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

console.log(
  '%c👋 Hey there! Built by Davood Suliaman.',
  'color:#5b8af0;font-family:Syne,sans-serif;font-size:14px;font-weight:700;'
);
