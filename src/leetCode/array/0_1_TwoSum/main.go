package twosum

// https://leetcode-cn.com/problems/two-sum/

// Double pointers
func twoSumDoublePointers(nums []int, target int) []int {
	result := make([]int, 2)
	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] != target {
				continue
			}

			result[0], result[1] = i, j
		}
	}

	return result
}

// Hash
func twoSumHash(nums []int, target int) []int {
	result := make([]int, 2)
	hash := make(map[int]int)

	for i, n := range nums {
		if j, exist := hash[target-n]; exist {
			result[0], result[1] = i, j
		}

		hash[n] = i
	}

	return result
}
