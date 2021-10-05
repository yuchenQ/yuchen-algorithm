package zigzagconversion

import "strings"

// https://leetcode-cn.com/problems/zigzag-conversion/

func convert(s string, numRows int) string {
	if numRows == 1 || len(s) <= numRows {
		return s
	}

	res := make([]string, numRows)
	period := 2*numRows - 2

	for i, c := range s {
		mod := i % period
		if mod <= numRows-1 {
			res[mod] += string(c)
		} else {
			res[period-mod] += string(c)
		}
	}

	return strings.Join(res, "")
}
