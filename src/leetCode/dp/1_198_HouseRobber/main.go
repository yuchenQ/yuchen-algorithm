package houserobber

import "yuchen-algorithm/src/leetCode/helper"

// dp: 含i的最大值
func rob1(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	dp := make([]int, len(nums))
	dp[0] = nums[0]
	dp[1] = nums[1]
	max := helper.Max(dp[0], dp[1])

	for i := 2; i < len(nums); i++ {
		dp[i] = nums[i]
		for j := 0; j < i-1; j++ {
			dp[i] = helper.Max(dp[i], dp[j]+nums[i])
			max = helper.Max(max, dp[i])
		}
	}

	return max
}

// dp: 至i的最大值（不一定含i）
func rob2(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	if len(nums) == 2 {
		return helper.Max(nums[0], nums[1])
	}

	dp := make([]int, len(nums))
	dp[0] = nums[0]
	dp[1] = helper.Max(nums[0], nums[1])

	for i := 2; i < len(nums); i++ {
		dp[i] = helper.Max(dp[i-2]+nums[i], dp[i-1])
	}

	return dp[len(dp)-1]
}

func rob2Optimal(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	if len(nums) == 2 {
		return helper.Max(nums[0], nums[1])
	}

	nums[1] = helper.Max(nums[0], nums[1])

	for i := 2; i < len(nums); i++ {
		nums[i] = helper.Max(nums[i-2]+nums[i], nums[i-1])
	}

	return nums[len(nums)-1]
}
