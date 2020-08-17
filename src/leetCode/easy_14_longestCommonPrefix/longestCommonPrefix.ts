// https://leetcode-cn.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefixA(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  let prefix: string = strs[0];

  for (let i = 1; i < strs.length; i++) {
    prefix = lcp(prefix, strs[i]);

    if (prefix.length === 0) {
      return "";
    }
  }

  return prefix;
}

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function lcp(str1: string, str2: string): string {
  const minLength = Math.min(str1.length, str2.length);

  let index: number = 0;

  while (index < minLength && str1[index] === str2[index]) {
    index += 1;
  }

  return str1.substring(0, index);
}

/**
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefixA1(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  let minIndex: number = strs[0].length - 1;

  for (let i = 0; i < strs.length; i++) {
    let j = 0;

    while (j <= minIndex) {
      if (j > strs[i].length - 1 || strs[0][j] !== strs[i][j]) {
        if (j === 0) {
          return "";
        }
        break;
      }

      j += 1;
    }
    minIndex = j - 1;
  }

  return strs[0].substring(0, minIndex + 1);
}

/**
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefixA2(strs: string[]): string {
  if (strs.length === 0) return '';

  let minLength: number = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
    }
  }

  let prefix: string = strs[0].substr(0, minLength);

  for (let i = 1; i < strs.length; i++) {
    let j = 0;

    for (; j < minLength; j++) {
      if (prefix[j] !== strs[i][j]) {
        break;
      }
    }

    prefix = prefix.substring(0, j);

    if (!prefix) {
      return '';
    }
  }

  return prefix;
};

/**
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefixB(strs: string[]): string {
  if (strs.length === 0) return '';

  const str0Length: number = strs[0].length;

  for (let i = 0; i < str0Length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (i > strs[j].length - 1 || strs[j][i] !== strs[0][i]) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
}

/**
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefixC(strs: string[]): string {
  if (strs.length === 0) return '';

  function lcp(start: number, end: number): string {
    if (start === end) {
      return strs[start];
    }

    const mid = (start + end) / 2;

    const lcpLeft: string = lcp(start, mid);
    const lcpRight: string = lcp(mid + 1, end);

    const minLength = Math.min(lcpLeft.length, lcpRight.length);

    for (let i = 0; i < minLength; i++) {
      if (lcpLeft[i] !== lcpRight[i]) {
        return lcpLeft.substring(0, i);
      }
    }

    return lcpLeft.substring(0, minLength);
  }

  return lcp(0, strs.length - 1);
}

/**
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefixD(strs: string[]): string {
  if (strs.length === 0) return '';

  function isCommonPrefix(len: number): boolean {
    for (let i = 0; i < strs.length; i++) {
      const subStr0 = strs[0].substring(0, len);
      const subStrI = strs[i].substring(0, len);

      if (subStr0 !== subStrI) {
        return false;
      }
    }

    return true;
  }

  let minLength = strs[0].length;

  strs.forEach(str => {
    if (str.length < minLength) {
      minLength = str.length;
    }
  });

  let left = 0, right = minLength;

  while (left < right) {
    const mid = left + (right - left + 1) / 2;

    if (isCommonPrefix(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return strs[0].substring(0, left);
}
