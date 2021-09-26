package rotatearray

// 我们需要将数组中的元素向右移动 k 个位置，
// 那么 k%l (l为数组长度) 的尾部元素会被移动到头部，剩下的元素会被向后移动。

// 新建数组替换
func rotate(nums []int, k int) {
	tmpArr := make([]int, len(nums))

	for i, n := range nums {
		tmpArr[(i+k)%len(nums)] = n
	}

	copy(nums, tmpArr)
}

// 一点一点移动
func rotate1(nums []int, k int) {
	var p int
	for i := 0; i < k%len(nums); i++ {
		p = nums[0]
		for j := 1; j < len(nums); j++ {
			p, nums[j] = nums[j], p
		}
		nums[0] = p
	}
}

// 我们只需要将所有元素反转，然后反转前 k 个元素，再反转后面l-k个元素，就能得到想要的结果。
func rotate2(nums []int, k int) {
	reverse(nums)
	reverse(nums[:k%len(nums)])
	reverse(nums[k%len(nums):])
}

func reverse(arr []int) {
	for i := 0; i < len(arr)/2; i++ {
		arr[i], arr[len(arr)-i-1] = arr[len(arr)-i-1], arr[i]
	}
}
