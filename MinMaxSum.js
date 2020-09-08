Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14

function miniMaxSum(arr) {
    let sorted = arr.sort();
    let min = sorted.slice(0,4).reduce((a,b) => a + b);
    let max = sorted.slice(1).reduce((a,b) => a + b);
    console.log(min, max);
   
   }