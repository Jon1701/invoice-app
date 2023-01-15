export interface Range {
  /**
   * Start of range.
   */
  min: number;

  /**
   * End of range.
   */
  max: number;
}

export interface Breakpoints {
  /**
   * Breakpoints for Mobile devices.
   */
  mobile: Range;

  /**
   * Breakpoints for Tablet devices.
   */
  tablet: Range;

  /**
   * Breakpoints for Laptop devices.
   */
  laptop: Range;

  /**
   * Breakpoints for Desktop devices.
   */
  desktop: Range;

  /**
   * Breakpoints for TV devices.
   */
  tv: Range;
}

// Object defining all breakpoints for all devices.
export const breakpoints: Breakpoints = Object.freeze({
  mobile: {
    min: 0,
    max: 480,
  },
  tablet: {
    min: 481,
    max: 768,
  },
  laptop: {
    min: 769,
    max: 1024,
  },
  desktop: {
    min: 1025,
    max: 1200,
  },
  tv: {
    min: 1201,
    max: 99999,
  },
});
