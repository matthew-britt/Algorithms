Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].

function alternatingSums(a) {
    let team1 = [];
    let team2 = [];
    let final = [];
    for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) {
        team1.push(a[i]);
       } else {
       team2.push(a[i]);       
       } 
    }
    final.push(team1.reduce((a,b) => a+b))
    final.push(team2.reduce((a,b) => a+b, 0))
    return final;Ï
  }

  function alternatingSums(a) {
    var team1 = 0;
    var team2 = 0;
    
    for (var i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            team1 += a[i];
        } else {
            team2 += a[i];
        }
    }
    
    return [team1, team2];
}
  alternatingSums([50, 60, 60, 45, 70]) = [180,105]