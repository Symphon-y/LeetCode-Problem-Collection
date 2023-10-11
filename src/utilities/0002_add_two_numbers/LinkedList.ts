// Singly Linked List Class Definition
export class LinkedListNode {
  val: number | BigInt;
  next: LinkedListNode | null;
  constructor(val?: number | BigInt, next?: LinkedListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList {
  head: LinkedListNode | null;

  constructor() {
    this.head = null;
  }

  append(val: number | BigInt | undefined) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print(text?: string): unknown[] {
    let result: unknown[] = [];
    let current = this.head;
    while (current) {
      current = current.next;
      result.push(current);
      console.log(current);
    }
    return result;
  }
}
