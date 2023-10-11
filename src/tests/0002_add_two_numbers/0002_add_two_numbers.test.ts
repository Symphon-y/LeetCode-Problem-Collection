import { addTwoNumbers } from '../../leetcode/0002_add_two_numbers/solution.ts';
import { LinkedList } from '../../utilities/0002_add_two_numbers/LinkedList.ts';
import { linkedListValuesToArray } from '../../utilities/0002_add_two_numbers/LinkedListValuesToArray.ts';

test('should output [7,0,8] when l1 input is [2, 4, 3], and l2 input is [5, 6, 4]', () => {
  const ListOne = new LinkedList();
  ListOne.append(2);
  ListOne.append(4);
  ListOne.append(3);

  const ListTwo = new LinkedList();
  ListTwo.append(5);
  ListTwo.append(6);
  ListTwo.append(4);

  const testList = new LinkedList();
  testList.append(7);
  testList.append(0);
  testList.append(8);

  const sumResult = addTwoNumbers(ListOne.head, ListTwo.head);
  const testResult = linkedListValuesToArray(testList.head, []);

  expect(linkedListValuesToArray(sumResult, [])).toEqual(testResult);
});
