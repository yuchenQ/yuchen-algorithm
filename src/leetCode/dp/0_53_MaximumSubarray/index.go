package maxsubarray

import (
	"yuchen-algorithm/src/leetCode/helper"
)

func maxSubArray(nums []int) int {
	dp := make([]int, len(nums))
	dp[0] = nums[0]

	result := nums[0]

	for i := 1; i < len(nums); i++ {
		dp[i] = helper.Max(nums[i], nums[i]+dp[i-1])
		result = helper.Max(result, dp[i])
	}

	return result
}
