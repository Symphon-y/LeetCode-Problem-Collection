import { getAllSubstrings } from '../../utilities/0003_length_of_longest_substring/getAllSubstrings.ts';
import { cleanArray } from '../../utilities/0003_length_of_longest_substring/cleanArray.ts';

/**
 *
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * @description
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 *
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 *
 * Constraints:
 *
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 */
export const lengthOfLongestSubstring = (s: string): number => {
  // handle edge cases
  if (s === '') {
    return 0;
  } else if (s === ' ') {
    return 1;
  } else if (s?.length === 1) {
    return 1;
  }
  // get all substrings in a string
  const allSubstrings = getAllSubstrings(s);
  // clean up array (remove duplicates, empty strings, ect)
  const cleanedArray = cleanArray(allSubstrings);
  // return the longest one
  return cleanedArray[0]?.length;
};
