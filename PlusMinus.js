Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000


function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zer = 0;
    let n = arr.length;
    arr.forEach(num => {
        if (num > 0) pos++;
        else if (num < 0) neg++;

        else zer++;
    })
    console.log((pos / n).toFixed(6));
    console.log((neg / n).toFixed(6));
    console.log((zer / n).toFixed(6));

}