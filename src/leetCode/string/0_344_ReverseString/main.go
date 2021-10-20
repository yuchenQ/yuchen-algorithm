package reversestring

func reverseStringTwoP(s []byte) {
	pSlow, pFast := 0, len(s)-1

	for pFast > pSlow {
		tmp := s[pFast]
		s[pFast], s[pSlow] = s[pSlow], tmp

		pFast -= 1
		pSlow += 1
	}
}

func reverseStringBinary(s []byte) {
	mid := len(s) / 2
	for i := 0; i < mid; i++ {
		s[i], s[(len(s)-1-i)] = s[(len(s)-1-i)], s[i]
	}
}
