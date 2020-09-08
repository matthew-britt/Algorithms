function checkPalindrome(inputString) {
    let x = inputString.split('')
    return x.join() === x.reverse().join() 
}