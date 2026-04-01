// Form utility functions

/**
 * Format a phone number as (XXX) XXX-XXXX.
 */
export function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  let formatted = digits;
  if (digits.length > 6) {
    formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  } else if (digits.length > 3) {
    formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else if (digits.length > 0) {
    formatted = `(${digits}`;
  }
  return formatted;
}
