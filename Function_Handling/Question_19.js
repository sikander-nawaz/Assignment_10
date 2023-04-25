// 19. Write a JavaScript program to generate nth Fibonacci term using function.

// SOLUTION

function fibonacci(num) {
    let firstNum = 0;
    let secondNum = 1;
    console.log(firstNum, "\n", secondNum);
    for (let index = 2; index < num; index++) {
        let thirdNum = firstNum + secondNum;
        console.log(" " + thirdNum);
        firstNum = secondNum;
        secondNum = thirdNum;
    }
}

fibonacci(9)