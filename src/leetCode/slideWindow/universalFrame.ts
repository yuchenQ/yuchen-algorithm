function slideWindow(s: string, t: string) {
  const need = {}, window = {};

  for (const char of t) {
    need[char] = (need[char] || 0) + 1;
  }

  let left = 0, right = 0;
  let valid = 0;

  while (right < s.length) {
    // c 是将移入窗口的字符
    const c = s[right];
    // 右移窗口
    right++;
    // 进行窗口内数据的一系列更新
    // if (need[c]) {
    //   window[c] = (window[c] || 0) + 1;

    //   if (window[c] === need[c]) {
    //     valid++;
    //   }
    // }
    /*** debug 输出的位置 ***/
    console.log(`window: ${left}, ${right}\n`);

    while (/*window needs shrink*/ true) {
      // d 是将移出窗口的字符
      const d = s[left];
      // 左移窗口
      left++;
      // 进行窗口内数据的一系列更新
      // if (need[d]) {
      //   if (window[d] === need[d]) {
      //     valid--;
      //   }

      //   window[d]--;
      // }
    }
  }
}
