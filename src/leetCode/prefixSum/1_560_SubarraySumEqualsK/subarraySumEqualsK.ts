// https://leetcode-cn.com/problems/subarray-sum-equals-k/
// https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/he-wei-kde-zi-shu-zu-by-leetcode-solution/
// 时间复杂度：O(n)，其中 n 为数组的长度。我们遍历数组的时间复杂度为 O(n)，
// 中间利用哈希表查询删除的复杂度均为 O(1)，因此总时间复杂度为 O(n)。
// 空间复杂度：O(n)，其中 n 为数组的长度。
// 哈希表在最坏情况下可能有 n 个不同的键值，因此需要 O(n) 的空间复杂度。
function subarraySum(nums: number[], k: number): number {
  const mp = new Map<number, number>();
  mp.set(0, 1);

  let count = 0, pre = 0;

  for (const n of nums) {
    pre += n;

    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }

    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
    }
  }

  return count;
};
