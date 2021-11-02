// https://leetcode-cn.com/problems/reverse-string-ii/
// 在遍历字符串的过程中，只要让 i += (2 * k)，i 每次移动 2 * k 就可以了
// 时间复杂度: O(n) n为字符串的长度
// 空间复杂度: O(n)
function reverseStr(s: string, k: number): string {
  const arr = [...s];

  for (let i = 0; i < arr.length; i += 2 * k) {
    reverse(arr, i, Math.min(i + k-1, arr.length))
  }

  return arr.join('');
};

function reverse(arr: string[], left: number, right: number): void {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left += 1;
    right -= 1;
  }
}
