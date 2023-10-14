const getAllSubstrings = (s: string): string[] => {
  let result: string[] = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      result.push(s.slice(i, j));
    }
  }
  return result;
};

const removeAllNonPalindromesFromArray = (arr: string[]): string[] => {
  let result: string[] = [];
  arr.forEach((s: string) => {
    isPalindrome(s) && result.push(s);
  });
  return result;
};

const isPalindrome = (s: string): boolean => {
  let result: boolean = true;
  // reverse the input string
  let r: string = s.split('').reverse().join('');
  // check that the values at the indexes of the reverse and input string match
  for (let i = 0; i < s.length; i++) {
    // if they do not match set the result to false
    s[i] !== r[i] && (result = false);
  }
  // return the result
  return result;
};

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
