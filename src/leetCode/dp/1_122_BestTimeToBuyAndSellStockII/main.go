package besttimetobuyandsellstockii

import "yuchen-algorithm/src/leetCode/helper"

// 贪心算法
// 时间复杂度：O(n)O(n)，其中 nn 为数组的长度。我们只需要遍历一次数组即可。
// 空间复杂度：O(1)O(1)。只需要常数空间存放若干变量
func maxProfitGreedyPolicy(prices []int) int {
	max := 0

	for i := 1; i < len(prices); i++ {
		if prices[i] > prices[i-1] {
			max += prices[i] - prices[i-1]
		}
	}

	return max
}

//DP
// dp[i][0] 表示第i天不持有股票所得现金
// dp[i][1] 表示第i天持有股票所得最多现金

// 时间复杂度：O(n)，其中 nn 为数组的长度。
// 一共有 2n2n 个状态，每次状态转移的时间复杂度为 O(1)O(1)，
// 因此时间复杂度为 O(2n)=O(n)。
// 空间复杂度：O(n)。我们需要开辟 O(n) 空间存储动态规划中的所有状态。
// 如果使用空间优化，空间复杂度可以优化至 O(1)
func maxProfitDP(prices []int) int {
	dp := make([][2]int, len(prices))

	dp[0][0] = 0
	dp[0][1] = -prices[0]

	for i := 1; i < len(prices); i++ {
		dp[i][0] = helper.Max(dp[i-1][0], dp[i-1][1]+prices[i])
		dp[i][1] = helper.Max(dp[i-1][1], dp[i-1][0]-prices[i])
	}

	return dp[len(prices)-1][0]
}

// 注意到上面的状态转移方程中，每一天的状态只与前一天的状态有关，而与更早的状态都无关，
// 因此我们不必存储这些无关的状态，只需要将 dp[i-1][0] 和 dp[i−1][1] 存放在两个变量中，
// 通过它们计算出 dp[i][0] 和 dp[i][1] 并存回对应的变量，
// 以便于第 i+1 天的状态转移即可
func maxProfitDPOptimal(prices []int) int {
	dp0, dp1 := 0, -prices[0]

	for i, p := range prices {
		if i == 0 {
			continue
		}
		dp0, dp1 = helper.Max(dp0, dp1+p), helper.Max(dp1, dp0-p)
	}

	return dp0
}
