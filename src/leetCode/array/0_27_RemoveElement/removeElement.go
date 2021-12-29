package removeelement

func removeElement(nums []int, val int) int {
	for i := 0; i < len(nums); {
		if nums[i] == val {
			nums = append(nums[:i], nums[i+1:]...)
		} else {
			i += 1
		}
	}

	return len(nums)
}

func removeElementDoublePointers(nums []int, val int) int {
	p := 0
	for i, n := range nums {
		if n == val {
			nums[i] = 0
		} else {
			nums[p] = n
			p += 1
		}
	}

	return p
}
