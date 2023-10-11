import { twoSum } from '../leetcode/two_sum/two_sum.ts';

test('should return [0,1] when input is [2, 7, 11, 15] and the target is 9', () => {
  expect(twoSum([2, 7, 11, 15], 9));
});

test('should return [1,2] when input is [3, 2, 4] and the target is 6', () => {
  expect(twoSum([3, 2, 4], 6));
});

test('should return [0,1] when input is [3, 3] and the target is 6', () => {
  expect(twoSum([3, 3], 6));
});
