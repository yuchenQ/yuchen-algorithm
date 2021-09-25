package minpathsum

import "yuchen-algorithm/src/leetCode/helper"

// dp 二维数组
func minPathSumDoubleDpArray(grid [][]int) int {
	dp := make([][]int, len(grid))

	for i, arr := range grid {
		dp[i] = make([]int, len(arr))
	}

	dp[0][0] = grid[0][0]

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if i == 0 && j != 0 {
				dp[i][j] = dp[i][j-1] + grid[i][j]
			} else if j == 0 && i != 0 {
				dp[i][j] = dp[i-1][j] + grid[i][j]
			} else if i != 0 && j != 0 {
				dp[i][j] = helper.Min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
			}
		}
	}

	return dp[len(grid)-1][len(dp[len(grid)-1])-1]
}

func minPathSumAccumlate(grid [][]int) int {
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if i == 0 && j != 0 {
				grid[i][j] += grid[i][j-1]
			} else if j == 0 && i != 0 {
				grid[i][j] += grid[i-1][j]
			} else if i != 0 && j != 0 {
				grid[i][j] += helper.Min(grid[i-1][j], grid[i][j-1])
			}
		}
	}

	return grid[len(grid)-1][len(grid[len(grid)-1])-1]
}

// 回溯法从底向上
func minPathSumFromBottomToTop(grid [][]int) int {
	for i := len(grid) - 2; i >= 0; i-- {
		grid[i][len(grid[i])-1] += grid[i+1][len(grid[i])-1]
	}
	for i := len(grid[len(grid)-1]) - 2; i >= 0; i-- {
		grid[len(grid)-1][i] += grid[len(grid)-1][i+1]
	}

	for i := len(grid) - 2; i >= 0; i-- {
		for j := len(grid[i]) - 2; j >= 0; j-- {
			grid[i][j] += helper.Min(grid[i+1][j], grid[i][j+1])
		}
	}

	return grid[0][0]
}
