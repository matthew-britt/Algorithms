ROBINHOOD ASSESSMENT

Since you love games of chance, you've decided to participate in a dice-rolling competition. The competition involves rolling three 6-sided dice, and the results of each die are represented by the integers a, b, and c respectively. Scores are calculated according to the following rules:

If all three dice had the same value (a = b = c) then you earn 1000 * a.
If exactly two of them are the same, you earn 500 * x (where x is the value of the two equal dice).
If all of them are different, you earn 100 * min(a, b, c).
Given the values of a, b, and c, your task is to calculate and return your total score.

function diceTotalScore(a, b, c) {
  
    if (a === b && a === c) return 1000 * a;
    if (a !== b && a !== c && b !==c) return Math.min(a,b,c);
    if (a === b) return 500 * a;
    if (a === c) return 500 * a;
    if (b === c) return 500 * b;
    
  
  }
  diceTotalScore(3,3,2)