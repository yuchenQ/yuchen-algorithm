package intersect

import (
	"sort"
)

// 双指针
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
