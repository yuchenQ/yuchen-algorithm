
/**
 * @param {string} s
 * @returns {boolean}
 */
function isValid(s: string): boolean {
  if (s === '') {
    return true;
  }

  if (s.length % 2 !== 0) {
    return false;
  }

  const pairs = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);

  const stack: string[] = [];

  [...s].forEach((p) => {
    if (pairs.has(p)) {
      stack.push(p);
    } else {
      if (stack.length === 0) {
        return false
      }

      const last: string = stack[stack.length - 1];

      if (p !== pairs.get(last)) {
        return false;
      }

      stack.pop();
    }
  });

  return stack.length === 0;
};
