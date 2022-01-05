// https://leetcode-cn.com/problems/two-sum/
// 复习1
function twoSumHash(nums: number[], target: number): number[] {
  const hash = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(target - nums[i])) {
      return [i, hash.get(target - nums[i])];
    } else {
      hash.set(nums[i], i);
    }
  }

  return [];
};
