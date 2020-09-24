In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]

                       function minesweeper(matrix) {
                        let mineArray = [];
                        for (let i = 0; i < matrix.length; i++) {
                          mineArray.push([]);
                          //console.log(matrix[i])
                          for (let j = 0; j < matrix[i].length; j++) {
                            mineArray[i][j] = 0;
                            //left
                            if (matrix[i][j - 1] != undefined) {
                             if (matrix[i][j - 1] === true) {
                              mineArray[i][j]++;
                              }
                            };
                            //right
                            if (matrix[i][j + 1] != undefined) {
                              if (matrix[i][j + 1] === true) {
                                mineArray[i][j]++;
                              }
                            };
                            //above
                            if (matrix[i - 1] != undefined) {
                              if (matrix[i - 1][j] === true) {
                                mineArray[i][j]++;
                              }
                            };
                            //below
                            if (matrix[i + 1] !== undefined) {
                              if (matrix[i + 1][j] === true) {
                                mineArray[i][j]++;
                              }
                            }
                      
                      
                        console.log(mineArray)
                          }
                        }
                      }
                      minesweeper([[true, false, false],
                                [false, true, false],
                                [false, false, false]])