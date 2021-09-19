function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1);
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;

    for (let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(max, dp[i]);
      }
    }
  }

	return max;
};
