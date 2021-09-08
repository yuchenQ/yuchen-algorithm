function intersect(nums1: number[], nums2: number[]): number[] {
  const compare = (a: number, b: number) => a - b;
  nums1.sort(compare);
  nums2.sort(compare);

  let p1 = 0, p2 = 0;
  const results: number[] = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      results.push(nums1[p1]);

      p1 += 1;
      p2 += 1;

      continue;
    }

    (nums1[p1] < nums2[p2]) ? p1 += 1 : p2 += 1;
  }

  return results;
};
