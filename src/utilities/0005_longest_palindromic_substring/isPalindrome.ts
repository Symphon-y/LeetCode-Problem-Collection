export const isPalindrome = (s: string): boolean => {
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
