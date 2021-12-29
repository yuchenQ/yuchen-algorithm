// https://leetcode-cn.com/problems/binary-search/
// https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html#%E6%80%9D%E8%B7%AF

// 闭区间
function binarySearchCloseRange(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
};

// 开区间
function binarySearchOpenRange(nums: number[], target: number): number {
  let left = 0, right = nums.length;

  while (left < right) {
    const middle = left + ((right - left) >> 1);
    if (nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
};
