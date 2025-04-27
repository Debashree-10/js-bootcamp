/*
 * Relational Operators
 * Relational operators are used to compare two values and return a boolean result (true or false).
 * Common relational operators include greater than (>), less than (<), greater than or equal to (>=), less than or equal to (<=), and equality (==, ===).
 */

let a = 5;
let b = 10;

console.log(a > b);  // Output: false
console.log(a < b);  // Output: true
console.log(a >= 5); // Output: true
console.log(a <= 5); // Output: true
console.log(a == 5); // Output: true
console.log(a === 5); // Output: true (strict equality)
console.log(a == '5'); // Output: true (loose equality, type coercion)
console.log(a === '5'); // Output: false (strict equality, different types)