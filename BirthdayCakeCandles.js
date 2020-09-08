You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

Input Format

The first line contains a single integer, , denoting the number of candles on the cake.
The second line contains  space-separated integers, where each integer  describes the height of candle .

Output Format

Return the number of candles that can be blown out on a new line.

Sample Input 

4
3 2 1 3

Sample Output 

2

function birthdayCakeCandles(ar) {
    var max = Math.max(...ar);
    return ar.filter(i => i === max).length;
  }

  OR 

function birthdayCakeCandles(ar) {
    return ar.filter(i => i === Math.max(...ar)).length;
}
//may cause recursion issues

OR

  function birthdayCakeCandles(ar) {
    let sorted = ar.sort();
    let n = sorted[sorted.length - 1];
    let count = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === n) count++;
    }
    return count;
  }