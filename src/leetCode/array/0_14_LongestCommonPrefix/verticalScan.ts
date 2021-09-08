function longestCommonPrefixVerticalScan(strs: string[]): string {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}
