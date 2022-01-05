// https://leetcode-cn.com/problems/longest-common-prefix/
// 这道题的话，首先要先知道那个数组的sort排序方法，
// 当数组是字符串的时候，他排序是按照那个码来排的，
// 比如说数组["reflower","abc","a","b","z"]，他排序的结果是[ 'a', 'abc', 'b', 'reflower', 'z' ]，
// 是按照第一个字符的大小来排，当第一个相同的的时候，依次往后比较，
// 直到比较出大小。知道这个就好办了。直接排序好，比较第一个和最后一个，返回相同的串即可。

function longestCommonPrefix(strs: string[]): string {
  if (strs.length <= 1) return strs[0];

  strs.sort();


  let i;

  for (i = 0; i < strs[0].length; i++) {
    if (strs[strs.length - 1].charAt(i) !== strs[0].charAt(i)) break;
  }

  return i < 1 ? "" : strs[0].substring(0, i + 1);
};
