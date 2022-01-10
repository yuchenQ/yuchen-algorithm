// https://leetcode-cn.com/problems/happy-number/
// 时间复杂度：O(logn)
// 空间复杂度 O(logn)
function isHappy(n: number): boolean {
  const hashSet = new Set();

  let sum = 0;

  while (sum !== 1) {
    sum = 0;
    const arr = [...n.toString()].map(s => parseInt(s));

    for (const num of arr) {
      sum += Math.pow(num, 2);
    }

    if (hashSet.has(sum)) return false;

    hashSet.add(sum);
    n = sum;
  }

  return true;
};

// 有空实现链表，快慢指针找环
