import { lengthOfLongestSubstring } from '../../leetcode/0003_length_of_longest_substring/solution.ts';

test('If the input is "abcabcbb" then the answer is "abc", with the length of 3.', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});

test('if the input is "bbbbb" then the answer is "b", with the length of 1.', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
});

test('If the input is "pwwkew" then the answer is "wke", with the length of 3.', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});