// https://leetcode-cn.com/problems/3sum/
// 时间复杂度：O(n^2)

function threeSum(nums: number[]): number[][] {
  const results = [];

  if (nums.length < 3) return results;

  nums.sort((a ,b) => a - b);
  const len = nums.length;

  for (let i = 0; i < len - 2; i++) {
    // a 去重
    if(i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1, right = len - 1;

    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if(sum == 0){
          results.push([nums[i],nums[left],nums[right]]);
          // b, c 去重
          while (left < right && nums[left] == nums[left + 1]) left++;
          while (left < right && nums[left] == nums[right - 1]) right--;
          left++;
          right--;
      }
      else if (sum < 0) left++;
      else if (sum > 0) right--;
    }
  }

  return results;
};
