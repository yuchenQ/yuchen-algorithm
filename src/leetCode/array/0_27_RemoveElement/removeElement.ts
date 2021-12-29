// https://leetcode-cn.com/problems/remove-element/
// https://reurl.cc/9Oo2ev
// 时间复杂度：O(n)，空间复杂度：O(1)
function removeElementTwoPointers(nums: number[], val: number): number {
  let slow = 0, fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow += 1;
    }

    fast += 1;
  }

  return slow;
};

// 时间复杂度：O(n)，空间复杂度：O(1)
function removeElementSwapFromLast(nums: number[], val: number): number {
  let start = 0, end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === val) {
      nums[start] = nums[end];
      end -= 1;
    } else {
      start += 1;
    }
  }

  return end;
}
