import ListNode from '../ListNode';
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
function swapPairsDoublePointers(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let [slow, fast] = [head, head.next];

  if (!fast) return slow;

  while (fast) {
    [slow.val, fast.val] = [fast.val, slow.val];
    [slow, fast] = [fast?.next, fast?.next?.next];
  }

  return head;
};

function swapPairsDummyNode(head: ListNode | null): ListNode | null {
  if (!head) return null;

  const result = new ListNode(0, head);
  let temp = result;

  while (temp.next && temp.next.next) {
    let [prev, cur] = [temp.next, temp.next.next];

    prev.next = cur.next;
    cur.next = prev;
    temp.next = cur;

    temp = prev;
  }

  return result.next;
}
