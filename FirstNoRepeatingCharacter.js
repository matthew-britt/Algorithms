Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

function firstNotRepeatingCharacter(s) {
    const chars = {};
    for (let char of s) {
        chars[char] ? chars[char]++ : chars[char] = 1
    }
    console.log(chars)
    for (let c in chars) {
      if (chars[c] === 1) return c;
    }
    return '_'
}