// https://leetcode-cn.com/problems/squares-of-a-sorted-array/
// 时间复杂度：O(n)，空间复杂度：O(n)
function sortedSquares(nums: number[]): number[] {
  let l = 0, r = nums.length - 1;
  const results = [];

  while (l <= r) {
    const leftVal = nums[l] * nums[l];
    const rightVal = nums[r] * nums[r];

    if(leftVal > rightVal) {
      results.unshift(leftVal);
      l++;
    } else {
      results.unshift(rightVal);
      r--;
    }
  }

  return results;
};
