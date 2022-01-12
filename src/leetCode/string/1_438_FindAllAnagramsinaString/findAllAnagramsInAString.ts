// https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
function findAnagrams(s: string, p: string): number[] {
  const need = {};
  const window = {};

  for (let a of p) {
    need[a] = (need[a] || 0) + 1;
  }

  let left = 0, right = 0;
  let valid = 0;
  const results = [];

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        valid++;
      }
    }

    while (right - left >= p.length) {
      if (valid == Object.keys(need).length) {
        results.push(left);
      }
      const c = s[left];
      left++;
      if (need[c]) {
        if (window[c] == need[c]) {
          valid--;
        }
        window[c]--;
      }
    }
  }
  return results;
};
