Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.

Function Description

Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.

birthday has the following parameter(s):

s: an array of integers, the numbers on each of the squares of chocolate
d: an integer, Ron's birth day
m: an integer, Ron's birth month

Output Format

Print an integer denoting the total number of ways that Lily can portion her chocolate bar to share with Ron.

Sample Input 

5
1 2 1 3 2
d=3 m=2

Sample Output 

2

function birthday(s, d, m) {

    let counter = 0;

    if (s.length < m) return counter;
    if (s.length ===1 && m === 1 && s[0] === d) return 1;
    for (let i = 0; i < s.length - m; i++) {
        let subS = s.slice(i, i + m);
        if (subS.reduce((a,b) => a + b) === d) counter++;
    }
    return counter;

}

