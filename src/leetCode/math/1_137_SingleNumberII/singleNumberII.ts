// https://leetcode-cn.com/problems/single-number-ii/

function singleNumberII(nums: number[]): number {
  const set = new Set<number>(nums);

  return (sum([...set, ...set, ...set]) - sum(nums)) / 2;
};

function sum(nums: number[]): number {
  let sum = 0;
  nums.forEach(n => sum += n);

  return sum;
}
