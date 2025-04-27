/*
 * Comma Operator
 * The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
 * It is often used in situations where multiple expressions need to be evaluated in a single statement.
 */

let a = (1, 2, 3);
console.log(a); // Output: 3 (the value of the last operand)

let x, y;
let b = (x = 5, y = 10, x + y);
console.log(b); // Output: 15 (evaluates x and y, then returns their sum)

let result = (1 + 2, 3 + 4, 5 + 6);
console.log(result); // Output: 11 (the value of the last expression)

x = 0;
y = (x += 1, x += 2, x += 3);
console.log(y); // Output: 6 (the value of the last expression)
console.log(x); // Output: 6 (x is updated)