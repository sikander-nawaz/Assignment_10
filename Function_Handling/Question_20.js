// 20. Write a JavaScript program to find GCD (HCF) of two numbers using function.

// SOLUTION

function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
}
  
console.log(gcd(12, 18));