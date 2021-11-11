function firstUniqChar(s: string): number {
  const map = new Map<string, Array<number>>();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], [i]);
    } else {
      map.set(s[i], [...map.get(s[i]), i]);
    }
  }

  let firstIndex: number = Number.MAX_SAFE_INTEGER;
  map.forEach((indexes) => {
    if (indexes.length === 1 && indexes[0] < firstIndex) {
      firstIndex = indexes[0];
    }
  })

  if (firstIndex >= s.length) {
    return -1;
  }

  return firstIndex;
};

function firstUniqChar1(s: string): number {
  const arr = new Array<number>(26).fill(0);
  const codeA = 'a'.charCodeAt(0);

  for (const c of s) {
    arr[c.charCodeAt(0) - codeA] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (arr[s[i].charCodeAt(0) - codeA] === 1) {
      return i;
    }
  }

  return -1;
}

function firstUniqCharX(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
};
