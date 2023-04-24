// 10. Write a JavaScript program to find power of any number using function.

// SOLUTION 

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }

console.log(power(2, 3)); 