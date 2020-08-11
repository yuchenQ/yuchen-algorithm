package finddifferentelements

func findDifferentElements(arrayA, arrayB []int) []int {
	mapA := make(map[int]int)
	mapB := make(map[int]int)

	for i, ele := range arrayA {
		mapA[ele] = i
	}

	for i, ele := range arrayB {
		mapB[ele] = i
	}

	for key := range mapA {
		if _, isExist := mapB[key]; isExist {
			delete(mapA, key)
			delete(mapB, key)
		}
	}

	var results []int

	for key := range mapA {
		results = append(results, key)
	}

	for key := range mapB {
		results = append(results, key)
	}

	return results
}
