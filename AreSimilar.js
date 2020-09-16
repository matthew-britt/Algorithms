Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

function areSimilar(a,b) {
    if (a.toString() === b.toString()) return true;
    let a1 = [];
    let b1 = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        a1.push(a[i]);
        b1.push(b[i]);
      }
    }
    b1 = b1.reverse();
    if (b1.length === 2 && a1.toString() === b1.toString())   return true;
    return false;
}

function areSimilar(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

areSimilar([1,2,3],[2,1,3])