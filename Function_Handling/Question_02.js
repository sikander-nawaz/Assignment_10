// Write a JavaScript program to find diameter, circumference and area of circle using functions. 

// SOLUTION

// 1 - Diameter of Circle (2r). 
function findDiameter(r) {
    return r * r; 
}

console.log(`Diameter of a circle is ${findDiameter(5)}`);


// 2 - Circumference of Circle (2πr).
function findCircumference(r) {
    return 2 * 3.14159 * r
}

console.log(`Circumference of Circle is ${findCircumference(5)}`);


// 3 - Area of a Circle (πr²).
function findArea(r) {
    return 3.14159 * r * r
}

console.log(`Area of a Circle is ${findArea(5)}`);