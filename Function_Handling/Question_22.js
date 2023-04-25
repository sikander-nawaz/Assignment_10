// 22. Write a JavaScript program to display all array elements using function.

// SOLUTION

function displayArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
let fruits = ["Apple", "Banana", "Orange", "Grapes"];
displayArrayElements(fruits);