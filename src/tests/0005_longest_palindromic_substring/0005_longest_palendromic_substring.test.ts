import { longestPalindrome } from '../../leetcode/0005_longest_palindromic_substring/solution.ts';

test('if the input is "babad", the answer should be "bab"', () => {
  expect(longestPalindrome('babad')).toEqual('bab');
});

test('if the input is "cbbd" the answer should be "bb"', () => {
  expect(longestPalindrome('cbbd')).toEqual('bb');
});
