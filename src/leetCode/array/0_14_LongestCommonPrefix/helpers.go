package longestcommonprefix

func Min(a, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}

func Lcp(a, b string) string {
	length := Min(len(a), len(b))

	for i := 0; i < length; i++ {
		if a[i] != b[i] {
			return a[:i]
		}
	}

	return a[:length]
}
