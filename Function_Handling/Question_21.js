// 21. Write a JavaScript program to find LCM of two numbers using function.

// SOLUTION

function findLCM(num1, num2) {
    let lcm = 0;
    let max = Math.max(num1, num2);
  
    while (true) {
      if (max % num1 == 0 && max % num2 == 0) {
        lcm = max;
        break;
      }
      max++;
    }
    return lcm;
}
  

console.log(findLCM(12, 18));