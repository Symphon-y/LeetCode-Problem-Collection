import { addTwoNumbers } from '../leetcode/0002_add_two_numbers/add_two_numbers.ts';
import { LinkedList } from '../utilities/0002_add_two_numbers/LinkedList.ts';
import { linkedListValuesToArray } from '../utilities/0002_add_two_numbers/LinkedListValuesToArray.ts';

test('should output [7,0,8] when l1 input is [2, 4, 3], and l2 input is [5, 6, 4]', () => {
  const ListOne = new LinkedList();
  const ListTwo = new LinkedList();

  const testList = new LinkedList();
  ListOne.append(2);
  ListOne.append(4);
  ListOne.append(3);

  ListTwo.append(5);
  ListTwo.append(6);
  ListTwo.append(4);

  testList.append(7);
  testList.append(0);
  testList.append(8);

  const sumResult = addTwoNumbers(ListOne.head, ListTwo.head);
  const testResult = linkedListValuesToArray(testList.head, []);

  expect(linkedListValuesToArray(sumResult, [])).toEqual(testResult);
});
