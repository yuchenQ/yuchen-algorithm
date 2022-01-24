// https://leetcode-cn.com/problems/design-linked-list/
import { LinkedListNode } from './linkedListNode';

export class MyLinkedList {
  private length: number
  private head: LinkedListNode | null
  private tail: LinkedListNode | null

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  private getNode(index: number): LinkedListNode {
    let cur: LinkedListNode = new LinkedListNode(0, this.head);
    for (let i = 0; i <= index; i++) {
      cur = cur.next;
    }

    return cur;
  }

  get(index: number): number {
    if (index >= this.length) return -1;

    return this.getNode(index).val;
  }

  addAtHead(val: number): void {
    const node = new LinkedListNode(val, this.head);
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
    this.length++;
  }

  addAtTail(val: number): void {
    const node = new LinkedListNode(val);

    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.length) return;

    if (index === this.length) return this.addAtTail(val);
    if (index === 0) return this.addAtHead(val);

    const beforeNode = this.getNode(index - 1);
    const node = new LinkedListNode(val, beforeNode.next);

    beforeNode.next = node;
    this.length++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.length) return;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      const beforeNode = this.getNode(index - 1);
      beforeNode.next = beforeNode.next.next;

      if (index === this.length - 1) this.tail = beforeNode;
    }

    this.length--;
  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/
