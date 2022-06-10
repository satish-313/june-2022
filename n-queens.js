const solveNQueens = (n) => {
  const solution = [];
  const queenPosition = [];

  function backtrack(n, sol, queenPosition, row) {
    if (row >= n && queenPosition.length > n) return;
    if (row === n - 1) {
      console.log(queenPosition);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (queenPosition.length !== 0) {
        for (let [r,c] of queenPosition) {
          // check has same column
          if ( col === c) break;
        }
      } else queenPosition.push([row, col]);
      backtrack(n, sol, queenPosition, row++);
      queenPosition.pop();
    }
  }

  backtrack(n, solution, queenPosition, 0);

  return solution;
};

console.log(solveNQueens(4));
