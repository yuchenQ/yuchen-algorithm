/**
 * @param {number[]} nums
 * @returns {number}
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }

  const len = nums.length;
  const record = new Map<number, boolean>();

  for (let i = 0; i < len; i++) {
    if (i >= nums.length) {
      break;
    }

    if (!record.has(nums[i])) {
      record.set(nums[i], true);

      continue;
    }

    nums.splice(i, 1);
    i -= 1;
  }

  return nums.length;
};

/**
 * @param {number[]} nums
 * @returns {number}
 */
function removeDuplicatesA(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }

  let j = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i-1]) {
      continue;
    }

    nums[j] = nums[i];
    j += 1;
  }

  return j;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function removeDuplicatesB(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }

  let fastP = 0, slowP = 0;

  while (fastP < nums.length) {
    if (nums[fastP] !== nums[slowP]) {
      slowP += 1;

      nums[slowP] = nums[fastP];
    }

    fastP += 1;
  }

  return slowP + 1;
}
