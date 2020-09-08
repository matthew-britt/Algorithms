PINTEREST ASSESSMENT

You are working on a logic game made up of a series of puzzles. The first type of puzzle you settle on is “sub-Sudoku”, a game where the player has to position the numbers 1..N on an NxN matrix.

Your job is to write a function that, given an NxN matrix, determines if the matrix is valid. A matrix is valid if every row and column contains exactly the numbers 1..N. For example, in a 4x4 matrix, each row and column would contain the numbers 1, 2, 3, and 4.

If the matrix is valid, return “VALID”. If it is not valid, return “INVALID”

The matrix may contain any integer, not just 1..N, and not just positive. However, the grid will only contain integers.

Examples
The following matrix would return “VALID”:

1 2 3
2 3 1
3 1 2
Each row and column contains exactly the numbers 1, 2, and 3 in a 3x3 matrix.

However, this matrix is “INVALID”:

1 2 3
1 2 3
1 2 3
Each row has the numbers 1, 2, and 3. However, the columns do not; the first column contains 1, 1, and 1.

The following matrix is also “INVALID”:

3 5 7
2 4 8
9 1 6
While each row and column has three different numbers, they are not the numbers 1, 2 and 3, so this is not valid.

function checkSubSudoku(matrix) {
    // Your code here.
    function getArr(matrix) {
        for (let i = 0; i < matrix.length; i++) {
        //check rows;
          let row = matrix[i];
          if (!isValid(row)) return 'INVALID';
        //check columns;
          let column = (arrayColumn(matrix,i));
          if (!isValid(column)) return 'INVALID';
        }
          return 'VALID';
       };

    //HELPER FUNCTION TO TEST ROWS/COLUMNS
    function isValid(arr) { 
        let list = {};
        for (let i of arr) {
          if (i < 1 || i > arr.length) return false;
           if (!list[i]) {
            list[i] = 1;
          } else return false;
        }
        return true;
      };

      //HELPER FUNCTION TO GET COLUMNS
      function arrayColumn(arr,n) {
        return arr.map(x=> x[n]);
      };


    return getArr(matrix);
  }