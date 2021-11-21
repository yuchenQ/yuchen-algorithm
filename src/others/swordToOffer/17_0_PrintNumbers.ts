// https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
function printNumbers(n: number): number[] {
  const times = Math.pow(10, n); // 10的n次方
  const nums = [];

  for (let i = 1; i < times; i++) {
    nums.push(i);
  }

  return nums;
};

function printNumbersNoMathPow(n: number): number[] {
  const nums = [];
  let times = 0;

  while (n > 0) {
    times = times * 10 + 9; // 10的n次方 - 1
    n -= 1;
  }

  for (let i = 1; i < times + 1; i++) {
    nums.push(i);
  }

  return nums;
};
