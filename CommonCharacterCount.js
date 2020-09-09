Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    let n1 = s1.split('');
    let n2 = s2.split('');
    count = 0;
   
    n1.forEach(e => {
        if (n2.includes(e)) {
        count++;
        n2.splice(n2.indexOf(e), 1);
        }
        // console.log(count)
    })
    return count;
   }
   commonCharacterCount("aabcc","adceeda")