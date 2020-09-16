Write a function that counts the number of times the numeral “7” occurs in a passed in integer value.

function numbers7(integer) {
    let count = 0;
    let int = integer.toString();

  for (let i of int) {
    console.log(i)
    if (i === '7') count++;
  }
     
    
    return count;
  }
  numbers7(12727) returns 2

Write the same function without converting the input into a string.

function numbers7(integer) {
    let count = 0;
    let len = Math.ceil(Math.log(integer + 1) / Math.LN10);
    let x = 1;
     //console.log(Math.floor(integer/1000 % 10))
    while (len > 0) {
     let i = Math.floor((integer/x) % 10);
     if (i === 7) count++;
     len--;
     x *= 10;
    }
     
    
    return count;
  }