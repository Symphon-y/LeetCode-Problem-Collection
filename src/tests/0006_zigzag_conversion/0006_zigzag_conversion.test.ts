import { convert } from '../../leetcode/0006_zigzag_conversion/solution.ts';

test('If the input string is PAYPALISHIRING with 3 rows the answer should be PAHNAPLSIIGYIR', () => {
  return expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
});
test('If the input string is PAYPALISHIRING with 4 rows the answer should be PINALSIGYAHRPI', () => {
  return expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
});
test('If the input string is A with 1 rows the answer should be A', () => {
  return expect(convert('A', 1)).toEqual('A');
});
