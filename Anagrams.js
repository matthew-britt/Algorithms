//============funWithAnagrams===========================
// Given an array of strings, remove each string that is an anagram of an earlier string
// and then return the array sorted
let arr = ["code", "doce", "framer", "ecod", "frame"];
// returns ["code", "frame", "framer"]
function funWithAnagrams(arr) {
  let uniqueWords = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < uniqueWords.length; j++) {
      if (isAnagram(uniqueWords[j], arr[i])) {
        duplicate = true;
      }
    }
    if (!duplicate) uniqueWords.push(arr[i]);
  }
  return uniqueWords.sort();
}

function isAnagram(str1, str2) {
  arr1 = str1.split("").sort().join();
  arr2 = str2.split("").sort().join();
  return arr1 === arr2;
}