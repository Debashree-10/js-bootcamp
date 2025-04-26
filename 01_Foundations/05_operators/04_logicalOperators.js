/*
 * Logical Operators in JavaScript
 * Logical operators are used to combine or manipulate boolean values (true and false).
 * They are essential for controlling the flow of your program, especially in conditional statements.
 * JavaScript provides three primary logical operators: AND (&&), OR (||), and NOT (!).  
 */

/*
 * Logical AND (&&)
 * The logical AND operator returns true if both operands are true.
 * If either operand is false, it returns false. It can also be used to evaluate multiple conditions.
 */
let a = true;
let b = false;

console.log(a && b); // false (because b is false)
console.log(a && true); // true (both are true)
console.log(false && true); // false (first operand is false)

// Using with multiple conditions
let age = 20;
let hasLicense = true;
console.log(age >= 18 && hasLicense); // true (both conditions are true)

/*
 * Logical OR (||)
 * The logical OR operator returns true if at least one of the operands is true.
 * It only returns false if both operands are false.
 */
let x = true;
let y = false;

console.log(x || y); // true (because x is true)
console.log(false || false); // false (both are false)
console.log(true || false); // true (at least one is true)

// Using with multiple conditions
let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true (at least one condition is true)

/*
 * Logical NOT (!)
 * The logical NOT operator negates the boolean value of its operand.
 * If the operand is true, it returns false; if the operand is false, it returns true. 
 */
let isRaining = false;

console.log(!isRaining); // true (negation of false)
console.log(!true); // false (negation of true)

// Using with conditions
let isLoggedIn = true;
console.log(!isLoggedIn); // false (negation of true)

/*
 * Short-Circuit Evaluation
 * JavaScript uses short-circuit evaluation with logical operators.
 * This means that in an expression using &&, if the first operand is false, the second operand is not evaluated because the overall expression cannot be true.
 * Similarly, with ||, if the first operand is true, the second operand is not evaluated.
 */
let condition1 = false;
let condition2 = true;

console.log(condition1 && (condition2 = false)); // false (condition2 is not evaluated)
console.log(condition2); // true (remains unchanged)

console.log(condition1 || (condition2 = false)); // false (condition2 is evaluated)
console.log(condition2); // false (changed to false)