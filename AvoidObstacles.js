You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.

function avoidObstacles(inputArray) {
    const arr = inputArray.sort((a,b) => a - b);
    let lastVal = Math.max(...arr);
  
    for (let i = 1; i <= lastVal + 1; i++) {
      if (arr.every(e => {
        return e % i != 0
        }))
      return i; 
    }
  }

  function avoidObstacles(arr) {
    for(var n=1;;n++) if(arr.every(x=>x%n)) return n
  }
  
  avoidObstacles([5, 3, 6, 7, 9]) = 4  