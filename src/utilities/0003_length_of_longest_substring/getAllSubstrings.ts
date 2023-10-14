export const getAllSubstrings = (s: string): string[] => {
  let result: string[] = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      result.push(s.slice(i, j));
    }
  }
  return result;
};
