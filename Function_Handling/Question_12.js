// 12. Write a JavaScript program to print all even or odd numbers in given range using function.

// SOLUTION 

function printNumbersInRange(start, end, isEven) {
    for (let i = start; i <= end; i++) {
      if (isEven && i % 2 === 0) {
        console.log(i);
      } else if (!isEven && i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  

console.log("Even numbers between 1 and 10:");
printNumbersInRange(1, 10, true);
  
console.log("Odd numbers between 1 and 10:");
printNumbersInRange(1, 10, false);