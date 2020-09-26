package validpalindrome

import (
	"unicode"
)

// https://github.com/azl397985856/leetcode/blob/master/problems/125.valid-palindrome.md
// https://leetcode-cn.com/problems/valid-palindrome/description/

func validate(r rune) bool {
	return unicode.IsDigit(r) || unicode.IsLetter(r)
}

// 解法1
func isPalindrome(s string) bool {
	if s == "" {
		return true
	}

	r := []rune(s)

	left, right := 0, len(s)-1

	for left < right {
		vs := []bool{validate(r[left]), validate(r[right])}

		if !vs[0] && !vs[1] {
			left++
			right--
		} else if !vs[0] && vs[1] {
			left++
		} else if vs[0] && !vs[1] {
			right--
		} else if unicode.ToLower(r[left]) != unicode.ToLower(r[right]) {
			return false
		} else {
			left++
			right--
		}
	}

	return true
}
