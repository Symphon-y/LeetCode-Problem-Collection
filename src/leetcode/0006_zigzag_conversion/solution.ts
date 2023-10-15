import { createPattern } from '../../utilities/0006_zigzag_conversion/createPattern.ts';
import { createZigZagSchema } from '../../utilities/0006_zigzag_conversion/createZigZagSchema.ts';

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
