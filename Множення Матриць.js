function multiplyMatrices(A, B) {
    let rowsA = A.length, colsA = A[0].length,
rowsB = B.length, colsB = B[0].length,
result = new Array(rowsA);
  
    if (colsA !== rowsB) {
    throw new Error('Кількість стовпців першої матриці повинна дорівнювати кількості рядків другої.');
    }
  
for (let i = 0; i < rowsA; i++) {
result[i] = new Array(colsB).fill(0);
  for (let j = 0; j < colsB; j++) {
    for (let k = 0; k < colsA; k++) {
result[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    return result;
  }
  const A = [
    [1, 2],
    [3, 4]
  ];
  
  const B = [
    [5, 6],
    [7, 8]
  ];
  
  const result = multiplyMatrices(A, B);
  console.log(result);