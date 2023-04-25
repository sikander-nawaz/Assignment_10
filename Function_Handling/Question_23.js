// 23. Write a JavaScript program to find sum of elements of array using function.

// SOLUTION

function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumArrayElements(numbers));