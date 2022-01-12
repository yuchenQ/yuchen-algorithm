// https://leetcode-cn.com/problems/meeting-rooms/submissions/
// 时间复杂度: O(NlogN)。我们所做的只是将 开始时间 和 结束时间 两个数组分别进行排序。
// 每个数组有 N 个元素，因为有 N 个时间间隔。
// 空间复杂度: O(N)。我们建立了两个 N 大小的数组。分别用于记录会议的开始时间和结束时间.
function canAttendMeetings(intervals: number[][]): boolean {
  const starts = intervals.reduce((arr, [s]) => arr.concat(s), []);
  const ends = intervals.reduce((arr, i) => arr.concat(i[1]), []);
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let sptr = 0, eptr = 0, count = 0;
  while (sptr < intervals.length) {
    if (starts[sptr] < ends[eptr]) {
      count++;

      if (count > 1) return false;
    } else {
      eptr++;
    }

    sptr++;
  }

  return true;
};
