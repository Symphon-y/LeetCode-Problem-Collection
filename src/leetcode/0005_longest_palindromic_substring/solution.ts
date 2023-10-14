import { getAllSubstrings } from '../../utilities/0003_length_of_longest_substring/getAllSubstrings.ts';
import { isPalindrome } from '../../utilities/0005_longest_palindromic_substring/isPalindrome.ts';
import { removeAllNonPalindromesFromArray } from '../../utilities/0005_longest_palindromic_substring/removeAllNonPalindromesFromArray.ts';

export const longestPalindrome = (s: string): string => {
  // handle edge cases
  if (s.length === 0) {
    return '';
  } else if (isPalindrome(s)) {
    return s;
  }
  // get all substrings
  const allSubstrings = getAllSubstrings(s);
  // sort them into an array by length
  const sortedSubstrings = allSubstrings.sort((a: string, b: string) => {
    return b.length - a.length;
  });
  const cleanedArray = removeAllNonPalindromesFromArray(sortedSubstrings);
  // return the longest substring
  return cleanedArray[0];
};
