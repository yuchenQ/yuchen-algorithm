function minimumTotalTwoDimensionDP(triangle: number[][]): number {
  const dp = triangle;

  for (let i = 1; i < triangle.length; i++) {
    dp[i][0] = dp[i-1][0] + triangle[i][0];
    dp[i][i] = dp[i-1][i-1] + triangle[i][i];

    for (let j = 1; j < triangle[i].length - 1; j++) {
      dp[i][j] += Math.min(dp[i-1][j-1], dp[i-1][j]);
    }
  }

  let result = dp[dp.length -1][0];
  for (let i = 0; i < dp[dp.length -1].length; i++) {
    result = Math.min(result, dp[dp.length -1][i]);
  }

  return result;
}

function minimumTotalFromBottomToTop(triangle: number[][]): number {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
};

