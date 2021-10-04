package threesum

import "sort"

// https://leetcode-cn.com/problems/3sum/
// 时间复杂度：O(N^2)，其中 NN 是数组 nums 的长度。
// 空间复杂度：O(logN)。我们忽略存储答案的空间，额外的排序的空间复杂度为 O(logN)。
// 然而我们修改了输入的数组 nums，在实际情况下不一定允许，
// 因此也可以看成使用了一个额外的数组存储了 nums 的副本并进行排序，空间复杂度为 O(N)。
func threeSum(nums []int) [][]int {
	ans := [][]int{}
	if nums == nil || len(nums) < 3 {
		return ans
	}
	sort.Ints(nums)

	for i := 0; i < len(nums); i++ {
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		left := i + 1
		right := len(nums) - 1
		for left < right {
			sum := nums[i] + nums[left] + nums[right]
			if sum == 0 {
				ans = append(ans, []int{nums[i], nums[left], nums[right]})
				for left < right && nums[left] == nums[left+1] {
					left++
				}
				for left < right && nums[right] == nums[right-1] {
					right--
				}
				left++
				right--
			} else if sum > 0 {
				right--
			} else if sum < 0 {
				left++
			}
		}
	}

	return ans
}
