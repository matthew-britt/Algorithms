Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each. Monica wants to spend as much as possible for the 2 items, given her budget.

Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend. If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.

Input Format

The first line contains three space-separated integers b, n, and m, her budget, the number of keyboard models and the number of USB drive models.
The second line contains n space-separated integers , the prices of each keyboard model.
The third line contains m space-separated integers , the prices of the USB drives.

Output Format

Print a single integer denoting the amount of money Monica will spend. If she doesn't have enough money to buy one keyboard and one USB drive, print -1 instead.

Sample Input 0

10 2 3
3 1
5 2 8
Sample Output 0

9

function getMoneySpent(keyboards, drives, b) {
 
    let max = 0;
    for (let i of keyboards) {
        for (let j of drives) {
            if (i + j > max && i + j <= b) {
                max = i + j;
            }
        }
    }
return max ? max : -1;
}