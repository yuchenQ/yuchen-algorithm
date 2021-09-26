package besttimetobuyandsellstocki

import (
	"math"
	"yuchen-algorithm/src/leetCode/helper"
)

func maxProfitGreedyPolicy(prices []int) int {
	low, profit := math.MaxInt32, 0

	for i := 0; i < len(prices); i++ {
		low = helper.Min(prices[i], low)
		profit = helper.Max(profit, prices[i]-low)
	}

	return profit
}

// dp[i][0] 表示第i天不持有股票所得现金。
// dp[i][1] 表示第i天持有股票所得最多现金
func maxProfitDP(prices []int) int {
	dp := make([][2]int, len(prices))

	dp[0][0] = 0
	dp[0][1] = -prices[0]

	for i := 1; i < len(prices); i++ {
		dp[i][0] = helper.Max(dp[i-1][0], dp[i-1][1]+prices[i])
		dp[i][1] = helper.Max(dp[i-1][1], -prices[i])
	}

	return dp[len(prices)-1][0]
}
