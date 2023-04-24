// 8. Write a JavaScript program to print all Armstrong numbers between given interval using functions. 

// SOLUTION 

function isArmstrong(num) {
    const digits = num.toString().split("");
    const n = digits.length;
    let sum = 0;
    for (const digit of digits) {
      sum += Math.pow(parseInt(digit), n);
    }
    return sum === num;
  }
  
  function findArmstrongNumbers(start, end) {
    const armstrongNumbers = [];
    for (let i = start; i <= end; i++) {
      if (isArmstrong(i)) {
        armstrongNumbers.push(i);
      }
    }
    return armstrongNumbers;
  }
  
  const armstrongNumbers = findArmstrongNumbers(1, 500);
  console.log(armstrongNumbers);