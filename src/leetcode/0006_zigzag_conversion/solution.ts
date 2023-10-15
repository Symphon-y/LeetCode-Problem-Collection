export const convert = (s: string, numRows: number): string => {
  let result: string = '';
  let isIndexAscending: boolean = true;
  let i: number = 0;

  while (result.length < s.length) {
    if (isIndexAscending) {
      result += s[i];
      i++;
      if (i === numRows - 1) {
        isIndexAscending = !isIndexAscending;
      }
    } else {
      result += s[i];
      i++;
      if (i === numRows - 1) {
        isIndexAscending = !isIndexAscending;
      }
    }
  }

  return result;
};
