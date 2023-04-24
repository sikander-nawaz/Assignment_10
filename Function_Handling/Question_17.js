// 17. Write a JavaScript program to find sum of digits of a given number using function.

// SOLUTION

function sumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(1234));