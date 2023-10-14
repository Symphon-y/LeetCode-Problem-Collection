import { findMedianSortedArrays } from '../../leetcode/0004_median_of_two_sorted_arrays/solution.ts';

test('If the input is [1,3], and [2] the median is 2', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0);
});
test('If the input is [1,2],[3,4] the median is 2.5', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
});
