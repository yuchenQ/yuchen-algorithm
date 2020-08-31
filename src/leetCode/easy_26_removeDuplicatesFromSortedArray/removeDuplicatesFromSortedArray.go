package removeduplicatesfromsortedarray

// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md
// 解法1：map存读取记录
func removeDuplicates(nums []int) int {
	if len(nums) < 2 {
		return len(nums)
	}

	record := map[int]bool{}

	length := len(nums)

	for i := 0; i < length; i++ {
		if i >= len(nums) {
			break
		}

		if _, ok := record[nums[i]]; ok {
			nums = append(nums[:i], nums[i+1:]...)
			i--
		} else {
			record[nums[i]] = true
		}
	}

	return len(nums)
}

// 解法2：看代码，提示（j is index, j + 1 = len）
func removeDuplicatesA(nums []int) int {
	if len(nums) < 2 {
		return len(nums)
	}

	j := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] == nums[i-1] {
			continue
		}

		nums[j] = nums[i]
		j++
	}

	return j
}

// 解法3：双指针中的快慢指针。在这里快指针是读指针，慢指针是写指针
// O(n) 的时间复杂度， O(1) 的空间复杂度
func removeDuplicatesB(nums []int) int {
	n := len(nums)

	if n < 2 {
		return n
	}

	fastP, slowP := 0, 0

	for fastP < n {
		if nums[fastP] != nums[slowP] {
			slowP++

			nums[slowP] = nums[fastP]
		}

		fastP++
	}

	return slowP + 1
}
