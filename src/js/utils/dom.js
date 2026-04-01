// DOM utility functions

/**
 * Toggle a class on an element, with optional force boolean.
 */
export function toggleClass(el, className, force) {
  if (!el) return;
  if (typeof force === 'boolean') {
    el.classList.toggle(className, force);
  } else {
    el.classList.toggle(className);
  }
}

/**
 * Set an ARIA attribute on an element.
 */
export function setAria(el, attr, value) {
  if (el) el.setAttribute(attr, value);
}

/**
 * Add a callback for Escape keydown events.
 */
export function onEscape(callback) {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') callback(e);
  });
}
