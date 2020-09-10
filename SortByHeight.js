Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
    let temp = [];
    for (let i of a) {
      if (i !== -1) temp.push(i);
    }
    temp.sort((a,b) => a - b);
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
        a.splice(i,1,temp[0]);
        temp.shift();
      }
    }
    return a;
  }
  sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

  function sortByHeight(a) {
    let filtered = a.filter(val => val !== -1)
    let sorted = filtered.sort((a, b) => a-b)
    return a.map(val => val === -1? -1: sorted.shift())
}


  function sortByHeight(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        
        return -1;
    })
}
