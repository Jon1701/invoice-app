import { describe, expect, test } from '@jest/globals';

import deepClone from '..';

interface Test {
  name: string;
  b: B;
}

interface B {
  c: C;
  d?: string;
}

interface C {
  d: D;
}

interface D {
  e: Array<number>;
  f: string;
}

describe('deepClone()', () => {
  test('source and cloned objects are exact and have no references between each other', () => {
    const expected: Test = {
      name: 'Test',
      b: {
        c: {
          d: {
            e: [3, 1, 4, 1, 5, 9, 2, 6, 5, 4],
            f: 'pi is an irrational number',
          },
        },
      },
    };
    const actual: Test = deepClone(expected);

    // Check if both objects are exact.
    expect(expected).toEqual(actual);

    // Manually modify expected object.
    expected.name = 'Expected Test';
    expected.b.c.d.e = [2, 7, 1, 3, 1];
    expected.b.c.d.f = 'e is an irrational number';
    expected.b.d = 'Hello World';

    // Check if values between both objects are different (reference check).
    expect(expected.name).not.toBe(actual.name);
    expect(expected.b.c.d.e).not.toBe(actual.b.c.d.e);
    expect(expected.b.c.d.f).not.toBe(actual.b.c.d.f);
    expect(expected.b.d).not.toBe(actual.b.d);
  });
});
