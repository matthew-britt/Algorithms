Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const yL = yourLeft;
    const yR = yourRight;
    const fL = friendsLeft;
    const fR = friendsRight;
    let a = yL >= yR ? yL : yR;
    let b = yL < yR ? yL : yR;
    let c = fL >= fR ? fL : fR;
    let d = fL < fR ? fL : fR;
    return a === c && b === d;
    // console.log(a,b,c,d)
  }
  function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var me = [yourLeft, yourRight].sort().join("");
    var friend = [friendsLeft, friendsRight].sort().join("");
    
    return me === friend;
}
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft+yourRight === friendsLeft+friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
}

  areEquallyStrong(15,10,10,12)