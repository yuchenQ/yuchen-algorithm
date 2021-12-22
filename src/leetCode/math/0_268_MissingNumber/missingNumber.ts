// https://leetcode-cn.com/problems/missing-number/
// 时间复杂度：O(n)
// 空间复杂度：O(1)
function missingNumber(nums: number[]): number {
  let sum = 0;

  for (let i = 0; i <= nums.length; i++) {
    sum += i;
  }

  return sum - sumX(nums);
};

function sumX(nums: number[]): number {
  let sum = 0;
  nums.forEach(n => sum += n);

  return sum;
}
