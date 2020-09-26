/**
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s: string): boolean {
  const pureStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  return pureStr === [...pureStr].reverse().join('');
}


function isPalindromeA(s: string): boolean {
  const pureStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

  let leftP = 0;
  let rightP = pureStr.length - 1;

  while (leftP < rightP) {
    if (pureStr[leftP] !== pureStr[rightP]) {
      return false;
    }

    leftP += 1;
    rightP -= 1;
  }

  return true;
}
