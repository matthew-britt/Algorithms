Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from the front of the book or from the back of the book. She always turns pages one at a time. When she opens the book, page 1 is always on the right side:

image

When she flips page 1, she sees pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and she wants to turn to page p, what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.

Output Format

Print an integer denoting the minimum number of pages Brie must turn to get to page .

Sample Input 

6
2

Sample Output 

1

function pageCount(n, p) {
    if (p === 1) return 0; //edge case
    if (n % 2 === 0 && n - p === 1) return 1; //edge case (6,5)
    let front = Math.ceil((p - 1)/2);
    let back = Math.floor((n - p)/2);
    return (front < back) ? front : back;

}