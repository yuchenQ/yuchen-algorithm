function change(amount: number, coins: number[]): number {
  const dp = new Array<number>(amount + 1).fill(0);
  dp[0] = 1;

  coins.forEach((c) => {
    for (let a = c; a <= amount; a++) {
        dp[a] += dp[a - c];
    }
  });

	return dp[amount];
};
