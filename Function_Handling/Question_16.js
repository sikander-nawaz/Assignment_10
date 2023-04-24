// 16. Write a JavaScript program to check whether a number is palindrome or not using function.

// SOLUTION

function isPalindrome(num) {
    let reversedNum = 0;
    let originalNum = num;
    while (originalNum !== 0) {
      reversedNum = (reversedNum * 10) + (originalNum % 10);
      originalNum = Math.floor(originalNum / 10);
    }
    return num === reversedNum;
}

// (isPalindrome() === true) ? console.log(`Number is Palindrome.`) : console.log(`Number is not Palindrome.`);

console.log(isPalindrome(121));