package longestcommonprefix

// 二分查找

// 显然，最长公共前缀的长度不会超过字符串数组中的最短字符串的长度。
// 用 minLength 表示字符串数组中的最短字符串的长度，
// 则可以在 [0,minLength] 的范围内通过二分查找得到最长公共前缀的长度。
// 每次取查找范围的中间值 mid，判断每个字符串的长度为 mid 的前缀是否相同，
// 如果相同则最长公共前缀的长度一定大于或等于 mid，
// 如果不相同则最长公共前缀的长度一定小于 mid，
// 通过上述方式将查找范围缩小一半，直到得到最长公共前缀的长度。

func longestCommonPrefixBinarySearch(strs []string) string {
	isCommonPrefix := func(length int) bool {
		str0, count := strs[0][:length], len(strs)
		for i := 1; i < count; i++ {
			if strs[i][:length] != str0 {
				return false
			}
		}
		return true
	}
	minLength := len(strs[0])
	for _, s := range strs {
		if len(s) < minLength {
			minLength = len(s)
		}
	}
	low, high := 0, minLength
	for low < high {
		mid := (high-low+1)/2 + low
		if isCommonPrefix(mid) {
			low = mid
		} else {
			high = mid - 1
		}
	}
	return strs[0][:low]
}
