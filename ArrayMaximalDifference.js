Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
    let diff = 0;
    let arr = inputArray;
    for (let i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i] - arr[i+1]) > diff) {
        diff = Math.abs(arr[i] - arr[i+1]);
      }
    }
   return diff;
  }
  
  function arrayMaximalAdjacentDifference(arr) {
    return Math.max(...arr.slice(1).map((x,i)=>Math.abs(x-arr[i])))
  }
  
  arrayMaximalAdjacentDifference([2, 4, 1, 0]) = 3