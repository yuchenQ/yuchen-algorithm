package plusone

// https://leetcode-cn.com/problems/plus-one/

func plusOne1(digits []int) []int {
	for i := len(digits) - 1; i >= 0; i-- {
		if digits[i] != 9 {
			digits[i] += 1
			break
		} else {
			digits[i] = 0
		}
	}

	if digits[0] != 0 {
		return digits
	} else {
		return append([]int{1}, digits...)
	}
}

func plusOne2(digits []int) []int {
	for i := len(digits) - 1; i >= 0; i-- {
		digits[i] += 1
		digits[i] %= 10

		if digits[i] != 0 {
			return digits
		}
	}

	return append([]int{1}, digits...)
}
