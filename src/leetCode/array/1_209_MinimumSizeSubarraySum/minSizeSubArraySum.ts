// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0, r = 0, sum = nums[0], min = Number.MAX_SAFE_INTEGER;

  while (r < nums.length) {
    if (sum >= target) {
      min = Math.min(min, r - l + 1);
      if (min === 1) return min;

      sum -= nums[l];
      l += 1;
    } else {
      r += 1;
      sum += nums[r];
    }
  }

  return min < Number.MAX_SAFE_INTEGER ? min : 0;
};
