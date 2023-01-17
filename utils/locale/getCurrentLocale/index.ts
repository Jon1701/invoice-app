/**
 * Get current BCP47 language tag.
 * Fallback to en-US if an error occurs.
 */
const getCurrentLocale = (): string => {
  try {
    return window.navigator.language;
  } catch (e) {
    return 'en-US';
  }
};

export default getCurrentLocale;
