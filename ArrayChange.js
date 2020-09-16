You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

function arrayChange(inputArray) {
    let arr = inputArray;  
    let count = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      let b = (i+1);
      while (arr[i] >= arr[b]) {
        arr[b]++;
        count++;
      }
    }
    return count;
  }
  arrayChange([1,1,1]) = 3