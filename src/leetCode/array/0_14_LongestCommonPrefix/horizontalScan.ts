function longestCommonPrefixHorizontalScanA(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const newPrefix = lcp(prefix, strs[i]);
    if(!newPrefix) {
      return "";
    }

    prefix = newPrefix;
  }

  return prefix;
}

function lcp(a: string, b: string): string {
  let prefix = a

  while (!b.startsWith(prefix)) {
    prefix = prefix.substring(0, prefix.length - 1);
  }

  return prefix;
}
