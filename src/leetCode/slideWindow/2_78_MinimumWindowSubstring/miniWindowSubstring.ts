// https://leetcode-cn.com/problems/minimum-window-substring/
// https://leetcode-cn.com/problems/minimum-window-substring/solution/hua-dong-chuang-kou-tong-yong-jie-ti-tao-9v69/
// 这个算法的时间复杂度是 O(M + N)，M 和 N 分别是字符串 S 和 T 的长度。
// 因为我们先用 for 循环遍历了字符串 T 来初始化 needs，时间 O(N)，
// 之后的两个 while 循环最多执行 2M 次，时间 O(M)。
function minWindow(s: string, t: string): string {
  const need = {}, window = {};

  for (const c of t) {
    need[c] = (need[c] || 0) + 1;
  }

  let left = 0, right = 0;
  let valid = 0;
  let start = 0, minLen = Number.MAX_SAFE_INTEGER;

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        valid++;
      }
    }

    while (valid === Object.keys(need).length) {
      if (right - left < minLen) {
        start = left, minLen = right - left;
      }

      let d = s[left];
      left++;

      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }

        window[d]--;
      }
    }
  }

  return minLen === Number.MAX_SAFE_INTEGER ? "" : s.substring(start, start + minLen);
};
