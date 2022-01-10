// https://leetcode-cn.com/problems/valid-anagram/

// 时间复杂度：O(nlogn)
// 空间复杂度 O(n)
function isAnagramSort(s: string, t: string): boolean {
  const sortedS = [...s].sort().join('');
  const sortedT = [...t].sort().join('');

  return sortedS === sortedT;
};

function isAnagramHash(s: string, t: string): boolean {
  const arr = new Array<number>(26).fill(0);

  for (const c of s) {
    arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }

  for (const c of t) {
    arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
  }

  return arr.every(n => !n);
};
