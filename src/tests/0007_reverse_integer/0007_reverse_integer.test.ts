import { reverse } from '../../leetcode/0007_reverse_integer/solution.ts';

test('123 should return 321', () => {
  expect(reverse(123)).toEqual(321);
});

test('-123 should return -321', () => {
  expect(reverse(-123)).toEqual(-321);
});

test('120 should return 21 because 021 is not a valid number', () => {
  expect(reverse(120)).toEqual(21);
});
