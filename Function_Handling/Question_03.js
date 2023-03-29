// 3. Write a JavaScript program to find maximum and minimum between two numbers using functions.

// SOLUTION 

// Find Maximum BTW Numbers.
function findMax(num1, num2) {
    return (num1 > num2) ? num1 : num2 ;
}

console.log(`Maximum Number is ${findMax(50,10)}`);


// Find Maximum BTW Numbers.
function findMin(num1, num2) {
    return (num1 > num2) ? num2 : num1 ;
}

console.log(`Minimum Number is ${findMin(50,10)}`);