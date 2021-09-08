package intersect

import (
	"sort"
)

// 双指针

// 时间复杂度：O(m \log m+n \log n)O(mlogm+nlogn)，其中 mm 和 nn 分别是两个数组的长度。
// 对两个数组进行排序的时间复杂度是 O(m \log m+n \log n)O(mlogm+nlogn)，
// 遍历两个数组的时间复杂度是 O(m+n)O(m+n)，因此总时间复杂度是 O(m \log m+n \log n)O(mlogm+nlogn)。

// 空间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个数组的长度。
// 为返回值创建一个数组 intersection，其长度为较短的数组的长度。

func intersectTwoPointers(nums1 []int, nums2 []int) []int {
	sort.Ints(nums1)
	sort.Ints(nums2)

	var results []int

	p1, p2 := 0, 0

	for p1 < len(nums1) && p2 < len(nums2) {
		if nums1[p1] == nums2[p2] {
			results = append(results, nums1[p1])

			p1 += 1
			p2 += 1
			continue
		}

		if nums1[p1] < nums2[p2] {
			p1 += 1
		} else {
			p2 += 1
		}
	}

	return results
}
