/**
 * @link https://leetcode.com/problems/two-sum/
 *
 * @description
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */
export const twoSum = (nums: number[], target: number): number[] => {
  // I - array of integers, target number
  // O - an array of the indexes which add up to the target
  // C - can not use the same element twice, answer can be in any order
  // E - n/a

  // index / val to check against
  let currentIndex: number = 0;
  // result array
  let result: number[] = [];

  // recursion
  const recursion = (arr: number[], currentValue: number) => {
    // loop over array
    arr.map((value: number, index: number) => {
      if (value + currentValue === target) {
        if (!(index === currentIndex)) {
          result.push(index, currentIndex);
        }
      }
    });
    if (!(result.length === 2)) {
      currentIndex++;
      recursion(nums, nums[currentIndex]);
    }
  };
  // call recursion on index
  recursion(nums, nums[currentIndex]);
  result.length = 2;
  // return result
  return result;
};
