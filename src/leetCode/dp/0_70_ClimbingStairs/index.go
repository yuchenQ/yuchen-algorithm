package climbingstairs

func climbStairs(n int) int {
	if n < 3 {
		return n
	}

	x, y := 1, 2

	for i := 3; i <= n; i++ {
		x, y = y, x+y
	}

	return y
}
