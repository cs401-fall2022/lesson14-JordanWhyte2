import {describe, expect, test} from '@jest/globals';
import {helloWorld} from '../app';

describe('hello module', () => {
  test('returns the string hello', () => {
    expect(helloWorld()).toBe('Hello World');
  });
});