package longestcommonprefix

import "strings"

// https://leetcode-cn.com/problems/longest-common-prefix/

// 解法1：横向扫描法(standard)
// 时间复杂度：O(mn)
// 空间复杂度：O(1)
func longestCommonPrefixA(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	prefix := strs[0]

	for i := 1; i < len(strs); i++ {
		prefix = lcpA(prefix, strs[i])

		if len(prefix) == 0 {
			return ""
		}
	}

	return prefix
}

func lcpA(str1, str2 string) string {
	minLength := min(len(str1), len(str2))
	i := 0

	for i < minLength && str1[i] == str2[i] {
		i++
	}

	return str1[:i]
}

func min(x, y int) int {
	if x < y {
		return x
	}

	return y
}

// 解法1.1：横向扫描法(mutation)
func longestCommonPrefixA1(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	minIndex := len(strs[0]) - 1

	for i := 0; i < len(strs); i++ {
		j := 0

		for j <= minIndex {
			// failed case
			if j > len(strs[i])-1 || strs[0][j] != strs[i][j] {
				if j == 0 {
					return ""
				}
				break
			}
			j++
		}

		minIndex = j - 1
	}

	return strs[0][:minIndex+1]
}

// 解法1.2：横向扫描法(mutation)
func longestCommonPrefixA2(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	prefix := strs[0]

	for i := 1; i < len(strs); i++ {
		for strings.Index(strs[i], prefix) != 0 {
			if len(prefix) == 0 {
				return ""
			}

			prefix = prefix[:len(prefix)-1]
		}
	}

	return prefix
}

// ============================================================================

// 解法2：纵向扫描法
// 时间复杂度：O(mn)
// 空间复杂度：O(1)
func longestCommonPrefixB(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	for i := 0; i < len(strs[0]); i++ {
		for j := 1; j < len(strs); j++ {
			last := len(strs[j]) - 1

			if i > last || strs[j][i] != strs[0][i] {
				return strs[0][:i]
			}
		}
	}
	return strs[0]
}

// ============================================================================

// 解法3：分治法
// 时间复杂度：O(mn)
// 空间复杂度：O(mlogn)
func longestCommonPrefixC(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	var lcp func(int, int) string

	lcp = func(start, end int) string {
		if start == end {
			return strs[start]
		}

		mid := (start + end) / 2

		lcpLeft, lcpRight := lcp(start, mid), lcp(mid+1, end)

		minLength := min(len(lcpLeft), len(lcpRight))

		for i := 0; i < minLength; i++ {
			if lcpLeft[i] != lcpRight[i] {
				return lcpLeft[:i]
			}
		}
		return lcpLeft[:minLength]
	}

	return lcp(0, len(strs)-1)
}

// ============================================================================

// 解法4：二分法
// 时间复杂度：O(mnlogm)
// 空间复杂度：O(1)
func longestCommonPrefixD(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	isCommonPrefix := func(length int) bool {
		for i := 1; i < len(strs); i++ {
			if strs[i][:length] != strs[0][:length] {
				return false
			}
		}

		return true
	}

	minLength := len(strs[0])

	for _, str := range strs {
		if len(str) < minLength {
			minLength = len(str)
		}
	}

	left, right := 0, minLength

	for left < right {
		mid := left + (right-left+1)/2 // 右中位数

		if isCommonPrefix(mid) {
			left = mid
		} else {
			right = mid - 1
		}
	}

	return strs[0][:left]
}
