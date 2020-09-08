let strings = ['def','de','fgh', 'dede']
let queries = ['de','lmn','fgh']

function matchingStrings(strings, queries) {
    let final = [];
    for (let q of queries) {
        let total = 0;
        for (let s of strings) {
            if (s === q) total++;
            // console.log(total)
        }
        final.push(total);
    }
  return final;
}
matchingStrings(strings, queries)

Answer = [3,0,1]