// 15. Write a JavaScript program to find reverse of any number using function.

// SOLUTION

function reverseNumber(num) {
    let reversedNum = 0;
    while (num !== 0) {
      reversedNum = (reversedNum * 10) + (num % 10);
      num = Math.floor(num / 10);
    }
    return reversedNum;
}  

console.log(reverseNumber(12345));