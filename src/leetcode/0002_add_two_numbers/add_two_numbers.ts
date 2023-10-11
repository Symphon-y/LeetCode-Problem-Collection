import {
  LinkedList,
  LinkedListNode,
} from '../../utilities/0002_add_two_numbers/LinkedList.ts';
import { linkedListValuesToArray } from '../../utilities/0002_add_two_numbers/LinkedListValuesToArray.ts';
import { ObjCache } from '../../types/0002_add_two_numbers/objCache.ts';

/**
 * @link - https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * @example
 * // Definition for singly-linked list.
 * class LinkedListNode {
 *     val: number
 *     next: LinkedListNode | null
 *     constructor(val?: number, next?: LinkedListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export const addTwoNumbers = (
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
