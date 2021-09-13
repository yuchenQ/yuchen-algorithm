package coinchange

import (
	"math"
	helper "yuchen-algorithm/src/leetCode/helper"
)

// 先遍历背包，再遍历物品
func coinChangeA(coins []int, amount int) int {
	dp := make([]int, amount+1)
	dp[0] = 0

	for a := 1; a <= amount; a++ {
		dp[a] = math.MaxInt32

		for _, c := range coins {
			if a-c < 0 && dp[a-c] != math.MaxInt32 {
				continue
			}

			dp[a] = helper.Min(dp[a], dp[a-c]+1)
		}
	}

	if dp[amount] == math.MaxInt32 {
		return -1
	} else {
		return dp[amount]
	}
}

// 先遍历物品，再遍历背包
func coinChangeB(coins []int, amount int) int {
	dp := make([]int, amount+1)

	dp[0] = 0
	for i := 1; i <= amount; i++ {
		dp[i] = math.MaxInt32
	}

	for _, c := range coins {
		for a := c; a <= amount; a++ {
			if dp[a-c] != math.MaxInt32 {
				dp[a] = helper.Min(dp[a], dp[a-c]+1)
			}
		}
	}

	if dp[amount] == math.MaxInt32 {
		return -1
	} else {
		return dp[amount]
	}
}
