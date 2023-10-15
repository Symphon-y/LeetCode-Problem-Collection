const createPattern = (s: string, numRows: number): string => {
  let isIndexAscending: boolean = true;
  let i: number = 0;

  let pattern: string = '';
  for (let j = 0; j < s.length; j++) {
    if (isIndexAscending) {
      pattern += i;
      i++;
      if (i >= numRows - 1) {
        isIndexAscending = false;
      }
    } else {
      pattern += i;
      i--;
      if (i <= 0) {
        isIndexAscending = true;
      }
    }
  }
  return pattern;
};

const createZigZagSchema = (
  s: string,
  pattern: string
): { [key: string]: any } => {
  let objectCache: { [key: string]: any } = {};

  for (let i = 0; i < s.length; i++) {
    if (!objectCache[pattern[i]]) {
      objectCache[pattern[i]] = [];
    }
    objectCache[pattern[i]].push(s[i]);
  }

  return objectCache;
};

export const convert = (s: string, numRows: number): string => {
  // Handle edge cases
  if (numRows === 1) {
    return s;
  } else if (numRows === 0) {
    return '';
  }

  let result: string = '';
  const pattern = createPattern(s, numRows);
  const schema = createZigZagSchema(s, pattern);
  const arraysInOrder = Object.keys(schema).sort(
    (a: string, b: string): number => {
      return Number(a) - Number(b);
    }
  );
  arraysInOrder.forEach((key) => {
    const convertedString = schema[key].join('');
    result += convertedString;
  });

  return result;
};
