export const getAllSubstrings = (s: string): string[] => {
  let result: string[] = [];
  const stringLength = s.length - 1;

  for (let i = 0; i < s.length; i++) {
    result.push(s.substring(i, stringLength));
  }

  for (let i = 0; i < s.length; i++) {
    result.push(s.substring(stringLength, i));
  }

  for (let i = 0; i < s.length; i++) {
    result.push(s.substring(i, stringLength - i));
  }

  return result.sort();
};
