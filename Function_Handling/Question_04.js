// 4. Write a JavaScript program to check whether a number is even or odd using functions.

// SOLUTION

function checkNumber(num) {
 return (num == 2 % 0) ? "This number is even." : "This number is odd.";
}

console.log(checkNumber(5));