export class LinkedListNode {
  public val: number
  public next: LinkedListNode | null

  constructor(val?: number, next?: LinkedListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
