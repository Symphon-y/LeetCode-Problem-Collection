export const createPattern = (s: string, numRows: number): number[] => {
  let isIndexAscending: boolean = true;
  let i: number = 0;

  let pattern: number[] = [];
  for (let j = 0; j < s.length; j++) {
    if (isIndexAscending) {
      pattern.push(i);
      i++;
      if (i >= numRows - 1) {
        isIndexAscending = false;
      }
    } else {
      pattern.push(i);
      i--;
      if (i <= 0) {
        isIndexAscending = true;
      }
    }
  }
  return pattern;
};
