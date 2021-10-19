package validanagram

import "sort"

// https://leetcode-cn.com/problems/valid-anagram/
// 时间复杂度：O(n)，其中 n 为 s 的长度。
// 空间复杂度：O(S)，其中 S 为字符集大小，此处 S=26
func isAnagramHash(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	hash := make(map[byte]int)

	for i, _ := range s {
		hash[s[i]] += 1
		hash[t[i]] -= 1
	}

	for _, v := range hash {
		if v != 0 {
			return false
		}
	}

	return true
}

// 时间复杂度：O(nlogn)，其中 n 为 s 的长度。排序的时间复杂度为 O(nlogn)，
// 比较两个字符串是否相等时间复杂度为 O(n)，因此总体时间复杂度为 O(nlogn+n)=O(nlogn)。

// 空间复杂度：O(logn)。排序需要 O(\log n)O(logn) 的空间复杂度。
func isAnagramSort(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sBytes, tBytes := []byte(s), []byte(t)
	sort.Slice(sBytes, func(i, j int) bool {
		return sBytes[i] < sBytes[j]
	})
	sort.Slice(tBytes, func(i, j int) bool {
		return tBytes[i] < tBytes[j]
	})

	return string(sBytes) == string(tBytes)
}
