Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.

function isLucky(n) {
    let half = n.toString().length/2;
    let arr = n.toString().split('').map(x=>+x);
    let first = arr.slice(0, half);
    let second = arr.slice(half);
    return first.reduce((a,b) => a + b) === 
    second.reduce((a,b) => a + b) ? true : false;
  }
  isLucky(1230)
