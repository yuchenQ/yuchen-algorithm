// https://leetcode-cn.com/problems/spiral-matrix/
// https://leetcode-cn.com/problems/spiral-matrix/solution/shou-hui-tu-jie-liang-chong-bian-li-de-ce-lue-kan-/
// 时间复杂度：O(n^2)，矩阵的大小是 m×n，需要填入矩阵中的每个元素。
// 空间复杂度：O(n)。除了返回的矩阵以外，空间复杂度是常数。
function spiralOrder(matrix: number[][]): number[] {
  const [m, n] = [matrix.length, matrix[0].length];

  let left = 0, right = n - 1;
  let top = 0, bottom = m - 1;

  const results = [];

  while (results.length !== m * n) {
    for (let i = left; i <= right; i++) {
      results.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      results.push(matrix[i][right]);
    }
    right--;

    // “遍历完成”这个时间点，要么发生在遍历完“上边”，要么发生在遍历完“右边”
    if (results.length === m * n) return results;

    for (let i = right; i >= left; i--) {
      results.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      results.push(matrix[i][left]);
    }
    left++;
  }

  return results;
};
