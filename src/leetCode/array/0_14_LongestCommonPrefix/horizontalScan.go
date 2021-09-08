package longestcommonprefix

import "strings"

// https://leetcode-cn.com/problems/longest-common-prefix/
// https://www.geekxh.com/1.0.%E6%95%B0%E7%BB%84%E7%B3%BB%E5%88%97/002.html

// 横向扫描

// 时间复杂度：O(mn)O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。
// 最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。

// 空间复杂度：O(1)O(1)。使用的额外空间复杂度为常数。
func longestCommonPrefixHorizontalScanA(strs []string) string {
	prefix := strs[0]

	for i := 1; i < len(strs); i++ {
		prefix = Lcp(prefix, strs[i])

		if len(prefix) == 0 {
			break
		}
	}

	return prefix
}

func longestCommonPrefixHorizontalScanB(strs []string) string {
	prefix := strs[0]

	for i := 1; i < len(strs); i++ {
		for strings.HasPrefix(strs[i], prefix) != true {
			prefix = prefix[:len(prefix)-1]
		}

		if prefix == "" {
			return ""
		}
	}

	return prefix
}
