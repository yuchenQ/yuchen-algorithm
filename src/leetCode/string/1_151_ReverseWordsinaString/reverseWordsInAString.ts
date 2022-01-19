// https://leetcode-cn.com/problems/reverse-words-in-a-string/
function reverseWords(s: string): string {
  const arrStr = s.split(' ').filter(i => i !== ' ');

  return arrStr.reverse().join(' ');
};
