/**
 * @param {number[]} nums
 * @returns {number}
 */
function singleNumber(nums: number[]): number {
  let ret = 0;

  nums.forEach(n => {
    ret ^= n;
  });

  return ret;
};

function singleNumberA(nums: number[]): number {
  const map = new Map<number, number>();

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.delete(num);
    }
  }

  return [...map.keys()][0];
};

function singleNumberB(nums: number[]): number {
  const sorted: number[] = nums.sort((a, b) => a - b);
  let single;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      single = sorted[i];
    } else {
      i++;
    }
  }

  return single;
};
