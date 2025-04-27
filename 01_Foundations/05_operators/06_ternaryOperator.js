/*
 * Ternary Operator
 * The ternary operator is a shorthand for the if-else statement.
 * It takes three operands and is often used for conditional expressions.
 */

// Syntax
// condition ? expressionIfTrue : expressionIfFalse;

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

let score = 75;
let result = (score >= 50) ? "Pass" : "Fail";
console.log(result); // Output: Pass

score = 45;
result = (score >= 50) ? "Pass" : "Fail";
console.log(result); // Output: Fail