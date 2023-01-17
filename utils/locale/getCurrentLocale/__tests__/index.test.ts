import { describe, test, expect } from '@jest/globals';

import getCurrentLocale from '..';

let windowSpy: jest.SpyInstance;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});

describe('getCurrentLocale()', () => {
  const languages: Array<string> = ['en-us', 'ja-JP', '&*%!^@)$%)'];

  describe.each(languages)('with language "%s"', language => {
    test(`it should return ${language}`, () => {
      windowSpy.mockImplementation(() => ({
        navigator: {
          language,
        },
      }));

      const expected = window.navigator.language;
      const actual = getCurrentLocale();

      expect(actual).toBe(expected);

      jest.resetAllMocks();
    });
  });

  describe('with a malformed window object', () => {
    test(`it should return fallback value "en-US"`, () => {
      windowSpy.mockImplementation(() => undefined);

      const expected = 'en-US';
      const actual = getCurrentLocale();

      expect(actual).toBe(expected);

      jest.resetAllMocks();
    });
  });
});
