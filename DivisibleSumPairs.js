You are given an array of  integers, ar, and a positive integer, k. Find and print the number of  pairs where i < j and ar[i] + ar[j] is divisible by k.

For example,  and . Our three pairs meeting the criteria are  and .

Function Description

Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

divisibleSumPairs has the following parameter(s):

n: the integer length of array 
ar: an array of integers
k: the integer to divide the pair sum by

function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
        //i < j;
        //(ar[i] + ar[j]) % k === 0;
        if ((i < j) && ((ar[i] + ar[j]) % k === 0)) pairs++;
            
        }
    }
    return pairs;
}