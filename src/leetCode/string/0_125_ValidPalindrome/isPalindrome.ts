// https://leetcode-cn.com/problems/valid-palindrome/
function isPalindromeRegex(s: string): boolean {
  const regex = /[^a-z0-9]/g;

  const pureStr = s.toLowerCase().replace(regex, '');

  let i = 0, j = pureStr.length - 1;
  while (i < j) {
    if (pureStr[i] !== pureStr[j]) {
      return false;
    }

    i += 1, j -= 1;
  }

  return true;
};

function isPalindromeReverse(s: string): boolean {
  const purS = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  return purS === purS.split('').reverse().join('');
};
