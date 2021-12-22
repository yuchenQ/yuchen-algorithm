// https://leetcode-cn.com/problems/single-number/
// 0 ^ a ^ b ^ a = b
// 时间复杂度：O(n)
// 空间复杂度：O(1)
function singleNumber(nums: number[]): number {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }

  return num;
};
