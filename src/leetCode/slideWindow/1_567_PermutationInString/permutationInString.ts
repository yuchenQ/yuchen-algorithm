// https://leetcode-cn.com/problems/permutation-in-string/
function checkInclusion(s1: string, s2: string): boolean {
  const window = {}, need = {};

  for (const c of s1) {
    need[c] = (need[c] || 0) + 1;
  }

  let left = 0, right = 0;
  let valid = 0;

  while (right < s2.length) {
    const c = s2[right];
    right++;

    if(need[c]) {
      window[c] = (window[c] || 0) + 1;
      if(need[c] === window[c]) {
        valid++;
      }
    }

    while(right - left >= s1.length) {
      if (valid === Object.keys(need).length) {
        return true;
      }

      const[d] = s2[left];
      left++;

      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }

        window[d]--;
      }
    }
  }

  return false;
};
