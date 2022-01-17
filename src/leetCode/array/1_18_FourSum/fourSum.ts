function fourSum(nums: number[], target: number): number[][] {
  const results = [];

  if (nums.length < 4) return results;

  nums.sort((a, b) => a - b);
  const len = nums.length;

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < len - 2; j++) {
      if(j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1, right = len - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[left] === nums[right - 1]) right--;
          left++;
          right--;
        }
        else if (sum < 0) left++;
        else if (sum > 0) right--;
      }
    }
  }

  return results;
};
