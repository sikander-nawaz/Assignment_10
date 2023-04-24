// 6. Write a JavaScript program to find all prime numbers between given interval using functions.

// SOLUTION

function isPrime(num) {
    // If num is less than 2 or not an integer:
    if (num < 2 || !Number.isInteger(num)) {
      return false;
    }
  
    // Check if num is divisible by any integer between 2 and the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    // If num is not divisible by any integer between 2 and the square root of num:
    return true;
  }
  
  function findPrimes(start, end) {
    const primes = [];
  
    // Check all numbers btw start and end.
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  

  const primes = findPrimes(10, 50);
  console.log(primes);