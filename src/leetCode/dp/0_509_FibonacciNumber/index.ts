function fib(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }

  let x = 0, y = 1;
  for (let i = 2; i <= n; i++) {
    [x, y] = [y, x + y];
  }

  return y;
};
