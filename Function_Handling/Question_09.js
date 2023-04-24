// 9. Write a JavaScript program to print all perfect numbers between given interval using functions.

// SOLUTION 

function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  }
  
  function findPerfectNumbers(start, end) {
    const perfectNumbers = [];
    for (let i = start; i <= end; i++) {
      if (isPerfect(i)) {
        perfectNumbers.push(i);
      }
    }
    return perfectNumbers;
  }
  
  const perfectNumbers = findPerfectNumbers(1, 10000);
  console.log(perfectNumbers);