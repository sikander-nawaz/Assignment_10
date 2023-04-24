// 7. Write a JavaScript program to print all strong numbers between given interval using functions.

// SOLUTION 

function factorial(num) {
    // Return 1 if num is 0 or 1:
    if (num === 0 || num === 1) {
      return 1;
    }
  
    // Calculate the factorial of num using recursion:
    return num * factorial(num - 1);
  }
  
  function isStrong(num) {
    let sum = 0;
    let temp = num;
  
    // Calculate the sum of factorials of digits of num:
    while (temp > 0) {
      const digit = temp % 10;
      sum += factorial(digit);
      temp = Math.floor(temp / 10);
    }
  
    // If the sum of factorials of digits of num equals num:
    return sum === num;
  }
  
  function findStrongNumbers(start, end) {
    const strongNumbers = [];
  
    // Check all numbers between start and end for strength:
    for (let i = start; i <= end; i++) {
      if (isStrong(i)) {
        strongNumbers.push(i);
      }
    }
  
    return strongNumbers;
  }
  
  const strongNumbers = findStrongNumbers(1, 200);
  console.log(strongNumbers);
  