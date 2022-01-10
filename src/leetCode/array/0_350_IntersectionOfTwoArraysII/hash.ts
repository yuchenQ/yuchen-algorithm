// 时间复杂度：O(m+n)O(m+n)，其中 mm 和 nn 分别是两个数组的长度。需要遍历两个数组并对哈希表进行操作，
// 哈希表操作的时间复杂度是 O(1)O(1)，因此总时间复杂度与两个数组的长度和呈线性关系。

// 空间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个数组的长度。对较短的数组进行哈希表的操作，
// 哈希表的大小不会超过较短的数组的长度。为返回值创建一个数组 intersection，其长度为较短的数组的长度。
function intersectHash(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) return intersectHash(nums2, nums1);

  const map = new Map<number, number>(), results:number[] = [];

  for (const num of nums1) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  for (const num of nums2) {
    if (map.has(num) && map.get(num)) {
      results.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return results;
};
