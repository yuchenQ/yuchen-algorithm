// https://leetcode-cn.com/problems/rotate-string/

// 时间复杂度: O(n2)
// 空间复杂度: O(n)
function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  let times = s.length;
  while(times > 0) {
    s = [...s.substring(1), s[0]].join('');

    if (s === goal) {
      return true;
    }

    times -= 1;
  }

  return false;
};

// 时间复杂度: O(n2)
// 空间复杂度: O(n)
function rotateStringCcncatTwoS(s: string, goal: string): boolean {
  return s.length === goal.length && s.concat(s).includes(goal);
};

// TODO: use KMP to check if the goal exist in S + S
