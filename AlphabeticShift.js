Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(s) {
    var c="abcdefghijklmnopqrstuvwxyza"
    return s.replace(/./g,x=>c[c.indexOf(x)+1])
  }

  function alphabeticShift(inputString) {
    const alpha = 'abcdefghijklmnopqrstuvwxyza';
    let newString = inputString.split('');
    for (let i = 0; i < newString.length; i++) {
      for (let j = 0; j < alpha.length; j++) {
        if (newString[i] === alpha[j]) {
          newString.splice(i,1,alpha[j+1]);
          break;
        }
      }
    }
    return newString.join('');
  }
  alphabeticShift("crazy")