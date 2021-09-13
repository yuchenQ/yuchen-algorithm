package longestcommonprefix

import helper "yuchen-algorithm/src/leetCode/helper"

func Lcp(a, b string) string {
	length := helper.Min(len(a), len(b))

	for i := 0; i < length; i++ {
		if a[i] != b[i] {
			return a[:i]
		}
	}

	return a[:length]
}
