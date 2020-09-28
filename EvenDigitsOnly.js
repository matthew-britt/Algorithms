Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.

function evenDigitsOnly(n) {
    let num = n.toString();
    for (let i of num) {
      if (i % 2 !== 0) return false;
    }
    return true;
  }
  
  function evenDigitsOnly(n) {
    return (n+"").split("").every(x=>x%2===0)
  }
  
  evenDigitsOnly(248622) = true