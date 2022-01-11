// https://leetcode-cn.com/problems/ransom-note/
function canConstructHash(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const map = new Map<string, number>();

  for (const c of [...ransomNote]) {
    map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
  }

  for (const c of [...magazine]) {
    if (!map.has(c)) continue;

    let count = map.get(c);
    if (count === 1) {
      map.delete(c);
    } else {
      count -= 1;
      map.set(c, count);
    }

    if (!map.size) return true;
  }

  return false;
};
