// https://leetcode-cn.com/problems/length-of-last-word/

// 时间复杂度: O(n)
// 空间复杂度: O(n)
function lengthOfLastWord(s: string): number {
  // const arr = s.split(' ').filter(w => !!w);
  const arr = s.trimEnd().split(' ');

  return arr[arr.length - 1].length;
};

// 时间复杂度: O(n)
// 空间复杂度: O(1)
function lengthOfLastWordPointer(s: string): number {
  let p = s.length - 1;

  while (p >= 0 && s[p] === ' ') {
    p -= 1;
  }

  let len = 0;
  while (p >= 0 && s[p] !== ' ') {
    p -= 1, len += 1;
  }

  return len;
};

function lengthOfLastWordSingleLoop(s: string): number {
  let count = 0
  let matchFirstChar = false
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      matchFirstChar = true
      ++count
    } else {
      if (matchFirstChar) {
        return count
      }
    }
  }
  return count
};
