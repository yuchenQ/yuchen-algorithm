package longestcommonprefix

// 纵向扫描

// 时间复杂度：O(mn)O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。
// 最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。

// 空间复杂度：O(1)O(1)。使用的额外空间复杂度为常数。
func longestCommonPrefixVerticalScan(strs []string) string {
	for i := 0; i < len(strs[0]); i++ {
		for j := 1; j < len(strs); j++ {
			if i == len(strs[j]) || strs[j][i] != strs[0][i] {
				return strs[0][:i]
			}
		}
	}

	return strs[0]
}
