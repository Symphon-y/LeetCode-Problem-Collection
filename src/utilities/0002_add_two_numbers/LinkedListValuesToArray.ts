import { LinkedListNode } from './LinkedList.ts';

export const linkedListValuesToArray = (
  node: LinkedListNode,
  array: unknown[]
) => {
  // if node has value push to array
  array.push(Number(node?.val));
  // if node has next property recurse else return array
  if (node.next) {
    linkedListValuesToArray(node.next, array);
  } else {
    return array;
  }
};
