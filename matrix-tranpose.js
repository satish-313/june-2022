const tranpose = (matrix) => {
  const mat = [];

  for (let col = 0; col < matrix[0].length; col++) {
    mat.push([]);
    for (let row = 0; row < matrix.length; row++) {
      mat[mat.length - 1].push(matrix[row][col]);
    }
  }

  return mat;
};

console.log(
  tranpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  tranpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
