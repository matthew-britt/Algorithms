Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

function sudoku2(grid) {
    for (let i = 0; i < grid.length; i++) {
      //each row
      let row = grid[i];
      if (!isValid(row)) return false;
      //console.log(row)
      // each column
      let column = (getColumn(grid, i));
      //console.log(column)
      if (!isValid(column)) return false;
  
      if (getSubGrid(grid) === false) return false;
    }
    return true;
  };
  
  function getSubGrid(arr) {
    let i = 0;
    let sub;
    while (i < arr.length) {
      let first1 = arr[i].slice(0, 3);
      let second1 = arr[i + 1].slice(0, 3);
      let third1 = arr[i + 2].slice(0, 3);
      sub1 = [...first1, ...second1, ...third1];
  
      if (!isValid(sub1)) return false;
      let first2 = arr[i].slice(3, 6);
      let second2 = arr[i + 1].slice(3, 6);
      let third2 = arr[i + 2].slice(3, 6);
      sub2 = [...first2, ...second2, ...third2];
      if (!isValid(sub2)) return false;
  
      let first3 = arr[i].slice(6);
      let second3 = arr[i + 1].slice(6);
      let third3 = arr[i + 2].slice(6);
      sub3 = [...first3, ...second3, ...third3];
      if (!isValid(sub3)) return false;
  
      i += 3;
    }
  //return true;
  }
  
  function getColumn(arr, n) {
    return arr.map(x => x[n]);
  };
  
  function isValid(arr) {
    let list = {};
    let newArr = arr.filter(x => x !== '.');
  
    for (let i of newArr) {
      if (!list[i]) {
        list[i] = 1;
      } else {
        return false;
      }
    }
    return true;
  };
  sudoku2([
    [".",".",".",".","2",".",".","9","."],
    [".",".",".",".","6",".",".",".","."],
    ["7","2",".",".","9","5",".",".","."], 
    [".","7",".",".",".",".",".",".","."], 
    [".",".",".",".","8","3",".",".","."], 
    [".",".","8",".",".","7",".",".","."], 
    [".",".",".",".",".","4",".",".","."], 
    [".","1",".","2",".",".",".",".","."], 
    [".","4",".",".","3",".",".","6","."]
    ])