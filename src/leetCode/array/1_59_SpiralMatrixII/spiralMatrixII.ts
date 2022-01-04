// https://leetcode-cn.com/problems/spiral-matrix-ii/
// 时间复杂度：O(n^2)，其中 n 是给定的正整数。矩阵的大小是 n×n，需要填入矩阵中的每个元素。
// 空间复杂度：O(1)。除了返回的矩阵以外，空间复杂度是常数。
function generateMatrix(n: number): number[][] {
  const matrix = new Array(n);
  for (let i = 0; i < n; i += 1) {
      matrix[i] = new Array(n);
  }

  let num = 1;

  let left = 0, right = n-1;
  let [top, bottom] = [0, n-1];

  while (num <= Math.pow(n, 2)) {
    // 上
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = num;
      num += 1;
    }
    top += 1;

    // 右
    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = num;
      num += 1;
    }
    right -= 1;

    // 下
    for (let i = right; i >= left; i-= 1) {
      matrix[bottom][i] = num;
      num += 1;
    }
    bottom -= 1;

    // 左
    for (let i = bottom; i >= top; i-= 1) {
      matrix[i][left] = num;
      num += 1;
    }
    left += 1;
  }
  return matrix;
};
