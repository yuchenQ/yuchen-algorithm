// https://leetcode-cn.com/problems/4sum-ii/
// 时间复杂度：O(n^2)。我们使用了两次二重循环，时间复杂度均为 O(n^2)。
// 在循环中对哈希映射进行的修改以及查询操作的期望时间复杂度均为 O(1)O(1)，因此总时间复杂度为 O(n^2)。

// 空间复杂度：O(n^2)，即为哈希映射需要使用的空间。
// 在最坏的情况下，A[i]+B[j] 的值均不相同，因此值的个数为 n^2 ，也就需要 O(n^2) 的空间。
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let count = 0;
  const map = new Map<number, number>();

  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const sum = n1 + n2;
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }

  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4;
      count += (map.get(0 - sum) || 0)
    }
  }

  return count;
};
