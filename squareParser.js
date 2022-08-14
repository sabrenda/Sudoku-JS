function squareParser(myIndex, sudoku, masTmp) {
  const squareStroka = Math.floor(myIndex[0] / 3) * 3;
  const squareStolb = Math.floor(myIndex[1] / 3) * 3;

  for (let i = squareStroka; i < squareStroka + 3; i += 1)
    for (let j = squareStolb; j < squareStolb + 3; j += 1)
      if (masTmp.indexOf(sudoku[i][j]) !== -1)
        masTmp.splice(masTmp.indexOf(sudoku[i][j]), 1);
  return masTmp;
}

module.exports = { squareParser };
