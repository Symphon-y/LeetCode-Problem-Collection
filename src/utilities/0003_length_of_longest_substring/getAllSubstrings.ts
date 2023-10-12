export const getAllSubstrings = (s: string): string[] => {
  const result: string[] = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      result.push(s.slice(i, j));
    }
  }

  return result.sort((a, b) => {
    return b.length - a.length;
  });
};
