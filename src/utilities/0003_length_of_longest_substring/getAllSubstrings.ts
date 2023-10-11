export const getAllSubstrings = (s: string): string[] => {
  let result: string[] = [];
  const stringLength = s.length;

  for (let i = 0; i < s.length; i++) {
    let copy = [...s].join('');
    result.push(copy.slice(i, s.length));
  }

  for (let i = 0; i < s.length; i++) {
    let copy = [...s].join('');
    result.push(copy.slice(s.length, i));
  }

  for (let i = 0; i < s.length; i++) {
    let copy = [...s].join('');
    result.push(copy.slice(i, s.length - i));
  }

  return result.sort();
};
