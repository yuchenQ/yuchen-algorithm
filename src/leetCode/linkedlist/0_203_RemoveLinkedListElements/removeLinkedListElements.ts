// https://leetcode-cn.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null;

  const result = new ListNode();
  result.next = head;

  let scout = result;

  while (scout.next) {
    if (scout.next.val === val) {
      scout.next = scout.next.next;
      continue;
    }

    scout = scout.next;
  }

  return result.next;
};
