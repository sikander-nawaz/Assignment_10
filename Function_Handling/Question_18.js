// 18. Write a JavaScript program to find factorial of any number using function.

// SOLUTION

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
}
  
console.log(factorial(5));