function climbStairs(n: number): number {
  if (n < 3) return n;

  let x = 1, y = 2;

  for (let i = 3; i <= n; i++) {
    [x, y] = [y, x + y];
  }

  return y;
}
