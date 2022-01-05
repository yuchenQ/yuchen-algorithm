import ListNode from '../listNode';
// 复习1
// https://leetcode-cn.com/problems/reverse-linked-list/

// 时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
// 空间复杂度：O(1)。
export default function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let prev = null, cur = head, tmp = null;

  while (cur) {
    [tmp, cur.next] = [cur.next, prev];
    [prev, cur] = [cur, tmp];
  }

  return prev;
};
