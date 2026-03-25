// ─── LC Education Consulting — main.js ────────────────────────────────────────

// ─── Native lazy loading fallback ─────────────────────────────────────────────
// Modern browsers support loading="lazy" natively. For any older images that
// still use data-lazyimg / data-srclazy (legacy GoDaddy pattern), we polyfill
// with IntersectionObserver so nothing is left unloaded.

function initLazyImages() {
  const lazyImgs = document.querySelectorAll('img[data-srclazy], source[data-srclazy]');
  if (!lazyImgs.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback: just load them all
    lazyImgs.forEach(el => {
      if (el.dataset.srclazy) el.src = el.dataset.srclazy;
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.dataset.srclazy) el.src = el.dataset.srclazy;
      obs.unobserve(el);
    });
  }, { rootMargin: '200px 0px' });

  lazyImgs.forEach(el => observer.observe(el));
}

// ─── Mobile nav ────────────────────────────────────────────────────────────────

function initMobileNav() {
  const toggle   = document.querySelector('.mobile-nav-toggle');
  const closeBtn = document.querySelector('.mobile-nav__close');
  const nav      = document.getElementById('mobile-nav');
  const overlay  = document.getElementById('mobile-nav-overlay');

  if (!toggle || !nav) return;

  function openNav() {
    nav.classList.add('is-open');
    nav.setAttribute('aria-hidden', 'false');
    overlay && overlay.classList.add('is-visible');
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
    closeBtn && closeBtn.focus();
  }

  function closeNav() {
    nav.classList.remove('is-open');
    nav.setAttribute('aria-hidden', 'true');
    overlay && overlay.classList.remove('is-visible');
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.focus();
  }

  toggle.addEventListener('click', () => {
    nav.classList.contains('is-open') ? closeNav() : openNav();
  });

  closeBtn && closeBtn.addEventListener('click', closeNav);
  overlay  && overlay.addEventListener('click', closeNav);

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
  });
}

// ─── Desktop dropdown nav ──────────────────────────────────────────────────────

function initDropdowns() {
  const dropdownBtns = document.querySelectorAll('.nav__dropdown-btn');

  dropdownBtns.forEach(btn => {
    const dropdown = document.getElementById(btn.getAttribute('aria-controls'));
    if (!dropdown) return;

    function open() {
      btn.setAttribute('aria-expanded', 'true');
      dropdown.classList.add('is-open');
    }

    function close() {
      btn.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('is-open');
    }

    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.getAttribute('aria-expanded') === 'true' ? close() : open();
    });

    // Close when clicking outside
    document.addEventListener('click', e => {
      if (!btn.closest('.nav__item').contains(e.target)) close();
    });

    // Close on Escape
    dropdown.addEventListener('keydown', e => {
      if (e.key === 'Escape') { close(); btn.focus(); }
    });

    // Trap focus within dropdown for keyboard users: close when focus leaves
    dropdown.addEventListener('focusout', e => {
      if (!dropdown.contains(e.relatedTarget) && !btn.contains(e.relatedTarget)) {
        close();
      }
    });
  });
}

// ─── Smooth section-jump scroll ───────────────────────────────────────────────
// Handles hash links that target an id on the same page.

function initSectionJump() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Move focus for accessibility
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
}

// ─── Cookie banner ────────────────────────────────────────────────────────────

const COOKIE_KEY = 'lc_cookie_accepted';

function initCookieBanner() {
  const banner    = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-banner-accept');

  if (!banner || !acceptBtn) return;

  // Show unless already accepted
  if (!localStorage.getItem(COOKIE_KEY)) {
    banner.classList.add('is-visible');
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, '1');
    banner.classList.remove('is-visible');
  });
}

// ─── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initLazyImages();
  initMobileNav();
  initDropdowns();
  initSectionJump();
  initCookieBanner();
});
