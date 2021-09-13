// 先遍历背包，再遍历物品
function coinChangeA(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    coins.forEach((c) => {
      if (a - c < 0 && dp[a - c] !== Number.MAX_SAFE_INTEGER) {
        return;
      }

      dp[a] = Math.min(dp[a], dp[a - c] + 1);
    });
  }

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};

// 先遍历物品，再遍历背包
function coinChangeB(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  coins.forEach((c) => {
    for (let a = c; a <= amount; a++) {
      if (dp[a - c] !== Number.MAX_SAFE_INTEGER) {
        dp[a] = Math.min(dp[a], dp[a - c] + 1);
      }
    }
  });

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
