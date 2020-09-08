Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

function firstDuplicate(a) { //Misses some test cases???? Not sure why.
    const memory = {};
    for (let num of a) {
         if (memory[num]) return num;
         memory[num] = num;
         //console.log(memory)
    }
     return -1
}

function firstDuplicate(arr) { //Passes all.
    const memory = {};

    for (let i = 0; i < arr.length; i++) {
      if (memory[arr[i]] !== undefined) {
        return arr[i];
      } else {
        memory[arr[i]] = arr[i];
      }
    }
  
    return -1;Ï
}

function firstDuplicate(a) {
   //This only passes half the tests. Also, Big(O) is n^2.
    // for (let i = 0; i < a.length; i++) {
    //     for (let j = 1; j < a.length; j++) {
    //         if (a[i] === a[j]) return a[j];
    //     }
    // }
    // return -1;
    
    for (let i of a) {
    let posi = Math.abs(i) - 1
    if (a[posi] < 0) return posi + 1;
    a[posi] = a[posi]* -1 ; 
  }
  return -1
}