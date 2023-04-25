// 24. Write a JavaScript program to find maximum and minimum elements in array using function.

// SOLUTION

function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return [max, min];
}
  
let numbers = [1, 2, 3, 4, 5];
let [max, min] = findMaxMin(numbers);
console.log("Maximum Number is: " + max);
console.log("Minimum Number is: " + min);