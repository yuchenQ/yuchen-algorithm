package groupanagrams

import "sort"

// https://leetcode-cn.com/problems/group-anagrams/

// 时间复杂度：O(nklogk)，其中 n 是 strs 中的字符串的数量，
// k 是 strs 中的字符串的的最大长度。需要遍历 n 个字符串，
// 对于每个字符串，需要 O(klogk) 的时间进行排序以及 O(1) 的时间更新哈希表，
// 因此总时间复杂度是 O(nklogk)。

// 空间复杂度：O(nk)，其中 nn 是 strs 中的字符串的数量，
// k 是 strs 中的字符串的的最大长度。需要用哈希表存储全部字符串。
func groupAnagramsSort(strs []string) [][]string {
	hash := map[string][]string{}

	for _, str := range strs {
		bytes := []byte(str)

		sort.Slice(bytes, func(i, j int) bool {
			return bytes[i] < bytes[j]
		})

		sortedStr := string(bytes)

		if anagrams, exist := hash[sortedStr]; exist {
			hash[sortedStr] = append(anagrams, str)
		} else {
			hash[sortedStr] = []string{str}
		}
	}

	results := make([][]string, 0, len(hash))
	for _, strs := range hash {
		results = append(results, strs)
	}

	return results
}

func groupAnagramsCount(strs []string) [][]string {
	hash := map[[26]int][]string{}

	for _, str := range strs {
		target := [26]int{}

		for _, r := range str {
			target[r-'a'] += 1
		}

		hash[target] = append(hash[target], str)
	}

	ans := make([][]string, 0, len(hash))
	for _, v := range hash {
		ans = append(ans, v)
	}

	return ans
}
