package lengthoflis

import "yuchen-algorithm/src/leetCode/helper"

func lengthOfLISDP(nums []int) int {
	dp := make([]int, len(nums))
	max := 1

	for i := 0; i < len(nums); i++ {
		dp[i] = 1
		for j := 0; j < i; j++ {
			if nums[i] > nums[j] {
				dp[i] = helper.Max(dp[i], dp[j]+1)
				max = helper.Max(max, dp[i])
			}
		}
	}

	return max
}
