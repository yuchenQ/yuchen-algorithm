package intersect

// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
// https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/001.html

// HASH表

// 时间复杂度：O(m+n)，其中 m 和 n 分别是两个数组的长度。需要遍历两个数组并对哈希表进行操作，
// 哈希表操作的时间复杂度是 O(1)，因此总时间复杂度与两个数组的长度和呈线性关系。

// 空间复杂度：O(min(m,n))，其中 m 和 n 分别是两个数组的长度。对较短的数组进行哈希表的操作，
// 哈希表的大小不会超过较短的数组的长度。为返回值创建一个数组 intersection，其长度为较短的数组的长度。
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
