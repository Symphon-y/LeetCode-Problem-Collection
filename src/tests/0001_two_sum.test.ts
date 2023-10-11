import { twoSum } from '../leetcode/0001_two_sum/solution.ts';

test('should return [0,1] when input is [2, 7, 11, 15] and the target is 9', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
});

test('should return [1,2] when input is [3, 2, 4] and the target is 6', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
});

test('should return [0,1] when input is [3, 3] and the target is 6', () => {
  expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
});
