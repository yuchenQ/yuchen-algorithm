// https://leetcode-cn.com/problems/game-of-life/
/**
  Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const neighbors: number[] = [-1, 0, 1];
  const rows = board.length, cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let liveNeighbors = 0;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (neighbors[i] === 0 && neighbors[j] === 0) continue;

          const r = row + neighbors[i], c = col + neighbors[j];
          if ((r < rows && r >= 0) && (c < cols && c >= 0) && (Math.abs(board[r][c]) === 1)) {
            liveNeighbors += 1;
          }
        }
      }

      // role1 or role3
      if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[row][col] = -1;
      }

      // role4
      if (board[row][col] === 0 && liveNeighbors === 3) {
        board[row][col] = 2;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] > 0) {
        board[row][col] = 1;
      } else {
        board[row][col] = 0;
      }
    }
  }
};

// https://leetcode-cn.com/problems/game-of-life/solution/ru-he-bu-shi-yong-e-wai-kong-jian-yong-int-bao-cun/
// 1st stores current status
// 2nd stores next status
function gameOfLifeBitewiseOpt(board: number[][]): void {
  const neighbors: number[] = [-1, 0, 1];
  const rows = board.length, cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let liveNeighbors = 0;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (neighbors[i] === 0 && neighbors[j] === 0) continue;

          const r = row + neighbors[i], c = col + neighbors[j];
          if ((r < rows && r >= 0) && (c < cols && c >= 0)) {
            liveNeighbors += board[r][c] & 1;
          }
        }
      }

      if(board[row][col] === 1) {
        if(liveNeighbors < 2 || liveNeighbors > 3) {
          board[row][col] |= 0  // 活细胞死亡
        } else {
          board[row][col] |= 2  // 活细胞仍然存活
        }
      }

      if(board[row][col] === 0) {
        if(liveNeighbors === 3) {
          board[row][col] |= 2  // 死细胞复活
        } else {
          board[row][col] |= 0  // 死细胞保持原样
        }
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // 把第 1 位右移至第 0 位，也就是只保留下一个状态，作为返回结果
      board[row][col] >> 1;
    }
  }
}
