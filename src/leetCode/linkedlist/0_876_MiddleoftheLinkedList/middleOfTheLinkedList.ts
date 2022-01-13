import ListNode from '../listNode';
// https://leetcode-cn.com/problems/middle-of-the-linked-list/
function middleNode(head: ListNode | null): ListNode | null {
  let slow, fast;
  slow = fast = head;

  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};
