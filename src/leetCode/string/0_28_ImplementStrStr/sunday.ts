function strStrSunday(haystack: string, needle: string): number {
  if (needle === "") {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  const shift = new Map<string, number>();

  for (let i = 0; i < needle.length; i++) {
    shift.set(needle[i], needle.length - i);
  }

  let idx = 0;
  while (idx <= haystack.length - needle.length) {
    const subStr: string = haystack.substr(idx, needle.length);
    if (subStr !== needle) {
      const nextChar: string = haystack[idx + needle.length];

      idx += shift.get(nextChar) || (needle.length + 1);
    } else {
      return idx;
    }
  }

  return -1;
}
