// 5. Write a JavaScript program to check whether a number is prime, Armstrong or perfect number using functions.

// SOLUTION

// Checking of Prime Numbers.
function isPrime(num) {
    if (num < 2) {
      return "Not a prime number";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return "Not a prime number";
      }
    }
    return "It's a prime number";
  }
  
  // Checking of Armstrong number
  function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digitCount = num.toString().length;
  
    while (temp > 0) {
        let digit = temp % 10;
      sum += Math.pow(digit, digitCount);
      temp = Math.floor(temp / 10);
    }
  
    return sum === num;
  }
  
  // Checking of perfect number
  function isPerfect(num) {
    let sum = 0;
  
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
  
    return sum === num;
  }
  console.log(`Prime Number: ${isPrime(13)}`);
  console.log(`Armstrong Number: ${isArmstrong(13)}`);
  console.log(`Perfecr Number: ${isPerfect(13)}`);