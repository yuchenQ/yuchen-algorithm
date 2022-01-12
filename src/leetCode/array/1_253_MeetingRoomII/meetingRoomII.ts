// https://leetcode-cn.com/problems/meeting-rooms-ii/
// https://leetcode-cn.com/problems/meeting-rooms-ii/solution/hui-yi-shi-ii-by-leetcode/
// https://leetcode-cn.com/problems/meeting-rooms-ii/solution/mei-ju-shuang-zhi-zhen-xian-xing-sao-miao-you-xian/
// 结束时间 > 开始时间 => + 1
// 结束时间 > 开始时间 => 房间够用，slow++
// 时间复杂度: O(NlogN)。我们所做的只是将 开始时间 和 结束时间 两个数组分别进行排序。
// 每个数组有 N 个元素，因为有 N 个时间间隔。
// 空间复杂度: O(N)。我们建立了两个 N 大小的数组。分别用于记录会议的开始时间和结束时间.
function minMeetingRooms(intervals: number[][]): number {
  const starts = [], ends = [];

  for (const [s, e] of intervals) {
    starts.push(s), ends.push(e);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let count = 0, slow = 0;

  for (let fast = 0; fast < intervals.length; fast++) {
    if (ends[slow] > starts[fast]) {
      count += 1;
    } else {
      slow += 1;
    }
  }

  return count;
};
