import { isPalindrome } from './isPalindrome.ts';

export const removeAllNonPalindromesFromArray = (arr: string[]): string[] => {
  let result: string[] = [];
  arr.forEach((s: string) => {
    isPalindrome(s) && result.push(s);
  });
  return result;
};
