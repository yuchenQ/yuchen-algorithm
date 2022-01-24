import { LinkedListNode } from './linkedListNode';

export class MyLinkedList1 {
  private head: LinkedListNode | null
  private tail: LinkedListNode | null
  private length: number
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  private getNode(index: number): LinkedListNode | null {
    if (index === 0) {
      return this.head;
    } else if (index === this.length - 1) {
      return this.tail;
    } else {
      let cur = new LinkedListNode(0, this.head);

      for (let i = 0; i <= index; i += 1) {
        cur = cur.next;
      }

      return cur;
    }
  }

  get(index: number): number {
    if (index > this.length - 1) return -1;

    return this.getNode(index).val;
  }

  addAtHead(val: number): void {
    const newHead = new LinkedListNode(val, null);

    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      [newHead.next, this.head] = [this.head, newHead];
    }

    this.length += 1;
  }

  addAtTail(val: number): void {
    const newHTail = new LinkedListNode(val, null);

    if (this.length === 0) {
      this.head = newHTail;
      this.tail = newHTail;
    } else {
      [this.tail.next, this.tail] = [newHTail, newHTail];
    }

    this.length += 1;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.length || index < 0) return;

    if (index === 0) {
      return this.addAtHead(val);
    } else if (index === this.length) {
      return this.addAtTail(val);
    } else {
      const prev = this.getNode(index - 1);
      const cur = prev.next;

      const newNode = new LinkedListNode(val, cur);
      prev.next = newNode;
      this.length += 1;
    }
  }

  deleteAtIndex(index: number): void {
    if (index > this.length - 1 || index < 0 || this.length === 0) return;

    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) this.tail = null;
    } else {
      const prev = this.getNode(index - 1);
      prev.next = prev.next.next;

      if (index === this.length - 1) this.tail = prev;
    }

    this.length -= 1;
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
