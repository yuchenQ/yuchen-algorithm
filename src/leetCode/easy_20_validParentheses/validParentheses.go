package validparentheses

// https://leetcode-cn.com/problems/valid-parentheses/
// https://github.com/azl397985856/leetcode/blob/master/problems/20.valid-parentheses.md

func isValid(s string) bool {
	n := len(s)

	if n == 0 {
		return true
	}

	if n%2 != 0 {
		return false
	}

	stack := []byte{}

	pairs := map[byte]byte{
		')': '(',
		'}': '{',
		']': '[',
	}

	for i := 0; i < n; i++ {
		expectedLeft, isRight := pairs[s[i]]

		if isRight {
			if len(stack) == 0 || stack[len(stack)-1] != expectedLeft {
				return false
			}

			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, s[i])
		}
	}

	return len(stack) == 0
}

func isValidA(s string) bool {
	n := len(s)

	if n == 0 {
		return true
	}

	if n%2 != 0 {
		return false
	}

	pairs := map[byte]byte{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	lps := make([]byte, 0, n/2)
	for i := 0; i < n; i++ {
		p := s[i]

		if _, ok := pairs[p]; ok {
			lps = append(lps, p)
		} else {
			if len(lps) == 0 || pairs[lps[len(lps)-1]] != p {
				return false
			}

			lps = lps[:len(lps)-1]
		}
	}

	return len(lps) == 0
}
