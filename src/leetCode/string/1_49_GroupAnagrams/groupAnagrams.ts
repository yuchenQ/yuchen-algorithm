// https://leetcode-cn.com/problems/group-anagrams/
// 时间复杂度:
// 1.1 字符串数组遍历第一次时，进行了sort，算法的时间复杂度为 O(n * mlogm)，
// n为字符串数组中字符串的个数，m为字符串的长度，当然字符串的长度不一，这里就简单写为m。
// 1.2 遍历哈希表，因为分组的个数未知，这里写为 O(k)
// 总的时间复杂度为 O(n * mlogm + k)

// 空间复杂度:
// 额外需要哈希表保存子结果集，这里就不详细分析哈希表每个bucket占多数空间了。
// 可以简单认为空间复杂度为O(n)，n为字符串数组中字符串的个数。

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  return Array.from(map.values());
};
