You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array

Input Format

The first line contains two space-separated integers, n and m, the number of elements in array a and the number of elements in array b.

Sample Input

2 3
2 4
16 32 96

Sample Output

3

function getTotalX(a, b) {
    // Write your code here
    let validCount = 0;

    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                validCount++;
            }
        }
    }
