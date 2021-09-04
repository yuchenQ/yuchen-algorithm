function intersectHash(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) {
    return intersectHash(nums2, nums1)
  }

  const results: number[] = [];
  const hash = new Map<number, number>()

  nums1.forEach(n1 => {
    if (!hash.has(n1)) {
      hash.set(n1, 1)

      return
    }

    hash.set(n1, hash.get(n1) + 1)
  })

  nums2.forEach(n2 => {
    if (!hash.has(n2)) {
      return
    }

    const times = hash.get(n2)

    if (times > 0) {
      hash.set(n2, times - 1)
      results.push(n2)
    }
  })

  return results;
};
