package triangleminitotal

import "yuchen-algorithm/src/leetCode/helper"

// dp 二维数组
// 时间复杂度：O(n2), 其中 n 是三角形的行数
// 空间复杂度：O(n2), 我们需要一个 n∗n 的二维数组存放所有的状态

func minimumTotalTwoDimensionDP(triangle [][]int) int {
	dp := make([][]int, len(triangle))

	for i := 0; i < len(dp); i++ {
		dp[i] = make([]int, len(dp))
	}

	dp[0][0] = triangle[0][0]

	for i := 1; i < len(triangle); i++ {
		dp[i][0] = dp[i-1][0] + triangle[i][0]
		dp[i][i] = dp[i-1][i-1] + triangle[i][i]

		for j := 1; j < len(triangle[i])-1; j++ {
			dp[i][j] = helper.Min(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
		}
	}

	result := dp[len(dp)-1][0]

	for i := 1; i < len(dp[len(dp)-1]); i++ {
		result = helper.Min(result, dp[len(dp)-1][i])
	}

	return result
}

// 回溯法从底向上
func minimumTotalFromBottomToTop(triangle [][]int) int {
	for i := len(triangle) - 2; i >= 0; i-- {
		for j := 0; j < len(triangle[i]); j++ {
			triangle[i][j] += helper.Min(triangle[i+1][j], triangle[i+1][j+1])
		}
	}

	return triangle[0][0]
}
