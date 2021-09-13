package coinchange2

// 组合： 外for遍历物品，内for遍历背包
func change(amount int, coins []int) int {
	dp := make([]int, amount+1)
	dp[0] = 1

	for _, c := range coins {
		for a := c; a <= amount; a++ {
			dp[a] += dp[a-c]
		}
	}

	return dp[amount]
}
