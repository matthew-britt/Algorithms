A left rotation operation on an array of size n shifts each of the array's elements d unit to the left. For example, if  left rotations are performed on array , then the array would become .

Given an array of n integers and a number, d, perform d left rotations on the array. Then print the updated array as a single line of space-separated integers.

Input Format

The first line contains two space-separated integers denoting the respective values of  (the number of integers) and  (the number of left rotations you must perform).
The second line contains  space-separated integers describing the respective elements of the array's initial state.

Output Format

Print a single line of n space-separated integers denoting the final state of the array after performing d left rotations.

Sample Input

5 4
1 2 3 4 5

Sample Output

5 1 2 3 4

function leftRotation(arr,d) {
    let newArr = arr.splice(d)
    for (let i of arr) {
        //console.log(arr)
        newArr.push(i);        
    }
    return newArr;
}
leftRotation([1,2,3,4,5],3)

function rightRotation(arr,d) {
    let newArr = arr.splice(arr.length - d);
    console.log(newArr)
    for (let i of arr) {
      newArr.push(i);
    }
    return newArr;
  }