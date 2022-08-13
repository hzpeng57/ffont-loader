import { randomStr } from '../../src/utils/string';

describe('string randomStr method', () => {
  test('No parameters are passed', () => {
    const str = randomStr();
    expect(str.length).toBe(5);
  });
  test('length 5', () => {
    const str = randomStr(5);
    expect(str.length).toBe(5);
  });
  test('length 3', () => {
    const str = randomStr(3);
    expect(str.length).toBe(3);
  });
  test('throw error when length more than 8', () => {
    expect(() => {
      randomStr(10);
    }).toThrow();
  });
});
