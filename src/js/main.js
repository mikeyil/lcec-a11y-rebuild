// ─── LC Education Consulting — main.js ────────────────────────────────────────

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

    document.addEventListener('click', e => {
      if (!btn.closest('.nav__item').contains(e.target)) close();
    });

    dropdown.addEventListener('keydown', e => {
      if (e.key === 'Escape') { close(); btn.focus(); }
    });

    dropdown.addEventListener('focusout', e => {
      if (!dropdown.contains(e.relatedTarget) && !btn.contains(e.relatedTarget)) {
        close();
      }
    });
  });
}

// ─── Cookie banner ────────────────────────────────────────────────────────────

function initCookieBanner() {
  const banner    = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-banner-accept');

  if (!banner || !acceptBtn) return;

  if (!localStorage.getItem('lc_cookie_accepted')) {
    banner.classList.add('is-visible');
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('lc_cookie_accepted', '1');
    banner.classList.remove('is-visible');
  });
}

// ─── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initDropdowns();
  initCookieBanner();
});
