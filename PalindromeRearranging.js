Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
    let input = inputString;
    const chars = {};
    for (let c of input) {
      !chars[c] ? chars[c] = 1 : chars[c]++;
      console.log(chars)
    }
    const v = Object.values(chars);
    let count = 0;
    for (let i of v) {
      if (i % 2 !== 0) count+=1;
      if (count > 1) return false;
    }
    return true;
  }
  palindromeRearranging('a,a,b,b') returns true;