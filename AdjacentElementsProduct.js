Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
    let maxProduct = -Infinity;
    for (let i = 0; i < inputArray.length - 1; i++) {    
        let tempProduct = inputArray[i] * inputArray[i + 1];
        if (tempProduct > maxProduct) {
          maxProduct = tempProduct;      
      }
    }
    return maxProduct;
  }

  function adjacentElementsProduct(inputArray) {
    var prod = inputArray[0] * inputArray[1];
    
    for (var i = 1; i<inputArray.length - 1;i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
    }
    
    return prod
}
   adjacentElementsProduct([3, 6, -2, -5, 7, 3])