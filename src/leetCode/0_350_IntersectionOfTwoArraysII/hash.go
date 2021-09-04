package intersect

// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
// https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/001.html
// HASH表
func intersectHash(nums1 []int, nums2 []int) []int {
	// 把小数组写入HASH省空间
	if len(nums1) > len(nums2) {
		return intersectHash(nums2, nums1)
	}

	hash := make(map[int]int)
	results := make([]int, 0)

	for _, num1 := range nums1 {
		hash[num1] += 1
	}

	for _, num2 := range nums2 {
		if hash[num2] > 0 {
			hash[num2] -= 1

			results = append(results, num2)
		}
	}

	return results
}
