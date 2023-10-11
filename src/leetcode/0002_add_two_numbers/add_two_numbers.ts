import {
  LinkedList,
  LinkedListNode,
} from '../../utilities/0002_add_two_numbers/LinkedList.ts';
import { ObjCache } from '../../types/0002_add_two_numbers/objCache.ts';

/**
 * @link - https://leetcode.com/problems/add-two-numbers/
 *
 * Definition for singly-linked list.
 * class LinkedListNode {
 *     val: number
 *     next: LinkedListNode | null
 *     constructor(val?: number, next?: LinkedListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
const linkedListValuesToArray = (node: LinkedListNode, array: unknown[]) => {
  // if node has value push to array
  array.push(Number(node?.val));
  // if node has next property recurse else return array
  if (node.next) {
    linkedListValuesToArray(node.next, array);
  } else {
    return array;
  }
};

const addTwoNumbers = (
  l1: LinkedListNode | null,
  l2: LinkedListNode | null
): LinkedListNode | null => {
  // Create a result linked list
  const resultList = new LinkedList();

  // Hold the values in an object cache
  let objectCache: ObjCache = {
    l1: [],
    l2: [],
  };

  // get all numbers in order from l1 (in array)
  l1 && linkedListValuesToArray(l1, objectCache.l1);
  // get all numbers in order from l2 (in array)
  l2 && linkedListValuesToArray(l2, objectCache.l2);

  // if no more numbers in either l1 or l2
  // reverse each array, join as string, convert to number and add array1 to array2
  const l1Value = BigInt(objectCache.l1.reverse().join(''));
  const l2Value = BigInt(objectCache.l2.reverse().join(''));
  // add the two values together
  const additionResult = BigInt(l1Value) + BigInt(l2Value);
  // convert result from BigInt to a string, then to an array, then reverse it.
  const additionResultConverted = String(additionResult).split('').reverse();

  // return a new linked list from the above
  additionResultConverted.forEach((value, index) => {
    resultList.append(BigInt(value));
  });

  return resultList.head;
};
