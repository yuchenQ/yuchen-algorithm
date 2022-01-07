import ListNode from '../ListNode';

// https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/solution/tu-jie-shuang-zhi-zhen-javascript-by-lzx-zd6z/

const getIntersectionNode = (A: ListNode | null, B: ListNode | null): ListNode | null => {
  let pA = A,
      pB = B;

  while (pA !== pB) {
      pA = (pA === null) ? B : pA.next;
      pB = (pB === null) ? A : pB.next;
  }

  return pA;
};
