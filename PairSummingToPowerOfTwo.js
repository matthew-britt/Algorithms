ROBINHOOD ASSESSMENT

Given an array of distinct integers a, your task is to find the number of pairs of indices (i, j) such that i ≤ j and the sum a[i] + a[j] is equal to some power of two.

Note: numbers 20 = 1, 21 = 2, 22 = 4, 23 = 8, etc. are considered to be powers of two.

Example

For a = [1, -1, 2, 3], the output should be pairSummingToPowerOfTwo(a) = 5.
There is one pair of indices where the corresponding elements sum up to 20 = 1:
(1, 2): a[1] + a[2] = -1 + 2 = 1.

function pairSummingToPowerOfTwo(a) {
    let pairs = 0;
    if (a.length === 1) pairs = 1;
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 1; j < a.length; j++) {
            if (i < j && (a[i] + a[j]) % 2 === 0 || (a[i] + a[j] === 1)) pairs++;
    }
  }
  return pairs;Ï
}
pairSummingToPowerOfTwo([1, -1, 2, 3]) should be 5