// https://leetcode-cn.com/problems/power-of-two/

function isPowerOfTwo(n: number): boolean {
  return Number.isInteger(Math.log2(n));

  // return Math.log2(n) % 1 === 0;
};

// 如果n是2的幂, n & (n-1) === 0;
// &: 按位“与”
// 时间复杂度：O(1)
// 空间复杂度：O(1)
function isPowerOfTwoBit(n: number): boolean {
  return n > 0 && ((n & (n-1)) === 0);
};

// 在题目给定的32位有符号整数的范围内，最大的2的幂为2^{30}=1073741824
// 我们只需要判断 n 是否是 2^{30}的约数即可。
function isPowerOfTwoMaxPow2(n: number): boolean {
  const biggest = 1 << 30;
  return n > 0 && biggest % n === 0;
};
