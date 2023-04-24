// 14. Write a JavaScript program to find sum of all even or odd numbers in given range using function.

// SOLUTION

function sumOfNumbersInRange(start, end, isEven) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (isEven && i % 2 === 0) {
        sum += i;
      } else if (!isEven && i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }
  
console.log(sumOfNumbersInRange(1, 10, true));

console.log(sumOfNumbersInRange(1, 10, false));