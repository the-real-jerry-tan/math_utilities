/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

console.log('Welcome to the Math Utilities in TypeScript Project!');

// Math utilities

// 1. Addition
function add(a: number, b: number): number {
    return a + b;
}

// 2. Subtraction
function subtract(a: number, b: number): number {
    return a - b;
}

// 3. Multiplication
function multiply(a: number, b: number): number {
    return a * b;
}

// 4. Division
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is undefined");
    }
    return a / b;
}

// 5. Modulus
function modulus(a: number, b: number): number {
    return a % b;
}

// 6. Exponentiation
function power(a: number, b: number): number {
    return Math.pow(a, b);
}

// 7. Square Root
function squareRoot(a: number): number {
    if (a < 0) {
        throw new Error("Square root of negative number is undefined");
    }
    return Math.sqrt(a);
}

// 8. Absolute Value
function absolute(a: number): number {
    return Math.abs(a);
}

// 9. Maximum of two numbers
function max(a: number, b: number): number {
    return Math.max(a, b);
}

// 10. Minimum of two numbers
function min(a: number, b: number): number {
    return Math.min(a, b);
}

// 11. Rounding to nearest integer
function round(a: number): number {
    return Math.round(a);
}

// 12. Ceiling (rounding up)
function ceiling(a: number): number {
    return Math.ceil(a);
}

// 13. Floor (rounding down)
function floor(a: number): number {
    return Math.floor(a);
}

// 14. Generating a random number between two values
function randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// 15. Factorial (recursive)
function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial of a negative number is undefined");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 16. Checking if a number is prime
function isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Test examples (you can remove these or replace with unit tests in the future)
console.log(add(3, 5));         // 8
console.log(subtract(10, 4));   // 6
console.log(multiply(6, 7));    // 42
console.log(divide(20, 4));     // 5
console.log(modulus(10, 3));    // 1
console.log(power(2, 3));       // 8
console.log(squareRoot(16));    // 4
console.log(absolute(-5));      // 5
console.log(max(10, 20));       // 20
console.log(min(10, 20));       // 10
console.log(round(4.5));        // 5
console.log(ceiling(4.1));      // 5
console.log(floor(4.9));        // 4
console.log(randomBetween(1, 10)); // Random number between 1 and 10
console.log(factorial(5));      // 120
console.log(isPrime(11));       // true
