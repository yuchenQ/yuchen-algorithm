// https://leetcode-cn.com/problems/implement-strstr/
function strStr(haystack: string, needle: string): number {
  if (needle === "") {
    return 0;
  }

  if (haystack === "" || haystack.length < needle.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

function strStr1(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
};

function strStr2P(haystack: string, needle: string): number {
  if (needle == "") return 0;

  let i = 0, j = 0;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) return i - j;
      i += 1, j += 1;
    } else {
      i = i - j + 1, j = 0;
    }
  }

  return -1;
}
