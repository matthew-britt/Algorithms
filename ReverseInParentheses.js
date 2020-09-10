Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

function reverseInParentheses(s) {
    while (true) {
        let c = s.indexOf(")");
        
        if (c === -1) {
            break;
        }
        
        let o = s.substring(0, c).lastIndexOf("(");
        
        let start = s.substring(0, o);
        let middle = s.substring(o + 1, c).split("").reverse().join("");
        let end = s.substring(c + 1, s.length);
            
        s = start + middle + end;
    }
    
    return s;
}

function reverseInParentheses(inputString) {
    var s = inputString;
  
    while (s.indexOf(")",0)!=-1) {
      var c = s.indexOf(")", 0);
      var a = s.lastIndexOf("(", c);
      var b = s.slice(a + 1, c).split("").reverse().join("");
      s = s.slice(0, a) + b + s.slice(c + 1);
  
      console.log(c,a,b,s);
    }
    return s;
  }
  reverseInParentheses("foo(bar)baz(blim)")  