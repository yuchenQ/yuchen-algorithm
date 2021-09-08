package longestcommonprefix

// 分治法

// 时间复杂度：O(mn)O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。
// 时间复杂度的递推式是 T(n)=2*T(n/2)+O(m)，通过计算可得 T(n)=O(mn)。

// 空间复杂度：O(mlogn)，其中 m 是字符串数组中的字符串的平均长度，n 是字符串的数量。
// 空间复杂度主要取决于递归调用的层数，层数最大为 logn，每层需要 mm 的空间存储返回结果。

func longestCommonPrefixDivideAndConquer(strs []string) string {
	var lcp func(int, int) string
	lcp = func(start, end int) string {
		if start == end {
			return strs[start]
		}

		mid := (start + end) / 2

		lcpL, lcpR := lcp(start, mid), lcp(mid+1, end)

		return Lcp(lcpL, lcpR)
	}

	return lcp(0, len(strs)-1)
}
