package singlenumber

// https://github.com/azl397985856/leetcode/blob/master/problems/136.single-number.md
// https://leetcode-cn.com/problems/single-number/

// 异或运算有以下三个性质:
// 1 任何数和 00 做异或运算，结果仍然是原来的数，即 a ⊕ 0 = a
// 2 任何数和其自身做异或运算，结果是 00，即 a ⊕ a = 0
// 3 异或运算满足交换律和结合律，即 a ⊕ b ⊕ a = b ⊕ a ⊕ a = b ⊕ (a ⊕ a) = b ⊕ 0 = b
func singleNumber(nums []int) int {
	ret := 0
	for _, n := range nums {
		ret ^= n
	}

	return ret
}

func singleNumberA(nums []int) int {
	var s int
	m := make(map[int]int)

	for _, n := range nums {
		if _, ok := m[n]; !ok {
			m[n] = 1
		} else {
			delete(m, n)
		}
	}

	for k := range m {
		s = k
	}

	return s
}
