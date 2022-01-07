import ListNode from '../ListNode';
// https://leetcode-cn.com/problems/linked-list-cycle-ii/
// https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html#%E6%80%9D%E8%B7%AF

// 时间复杂度：O(n)
// 空间复杂度：O(n)
function detectCycle(head: ListNode | null): ListNode | null {
  const set = new Set<ListNode>();

  while (head !== null) {
    if (set.has(head)) return head;

    set.add(head), head = head?.next;
  }

  return null;
};
