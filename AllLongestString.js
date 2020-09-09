Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].


function allLongestStrings(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}


function allLongestStrings(inputArray) {
    let longest = [];
    let stringLength = [];
    let maxNum;
    for (let s of inputArray) {
      stringLength.push(s.length);
      maxNum = Math.max(...stringLength)
    }
    for (let s of inputArray) {
      if (s.length === maxNum) {
        longest.push(s)
      }
    }
    return longest;
}
allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])