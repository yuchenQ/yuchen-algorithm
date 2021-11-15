// https://leetcode-cn.com/problems/implement-strstr/solution/shua-chuan-lc-shuang-bai-po-su-jie-fa-km-tb86/
// 时间复杂度：n 为原串的长度，m 为匹配串的长度。复杂度为 O(m + n)。
// 空间复杂度：构建了 next 数组。复杂度为 O(m)。
function strStrKMP(haystack: string, needle: string): number {
  if (needle === "") {
    return 0;
  }

  const next: number[] = getNext(needle);

  for (let i = 0, j = 0; i < haystack.length; i++) {
    while (j && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }

    if (haystack[i] === needle[j]) {
      j += 1;
    }

    if (j === needle.length) {
      return i - needle.length + 1;
    }
  }

  return -1;
}

function getNext(needle: string): number[] {
  const next = new Array(needle.length).fill(0);

  for (let j = 0, i = 1; i < next.length; i += 1) {
    while (j && needle[j] !== needle[i]) {
      j = next[j - 1];
    }

    if (needle[j] === needle[i]) {
      j += 1;
    }

    next[i] = j;
  }

  return next;
}
