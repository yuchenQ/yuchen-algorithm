// https://leetcode-cn.com/problems/intersection-of-two-arrays/
// 时间复杂度：O(n)
// 空间复杂度 O(n)
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1), set2 = new Set(nums2);
  const results = [];

  set1.forEach(n => set2.has(n) && results.push(n));

  return results;
};
