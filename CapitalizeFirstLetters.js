Programming challenge description:
Write a program which capitalizes the first letter of each word in a sentence.
Input:
Your program should read lines from standard input. Each line has a sequence of words.
Output:
Print the capitalized words.
Test 1
Test Input
Download Test 1 Input
Hello world
Expected Output
Download Test 1 Input
Hello World

function capitalizes(input) {
    return input.toLowerCase()
                .split(' ')
                .map(x=>x[0].toUpperCase()+x.slice(1))
                .join(' ');
 }