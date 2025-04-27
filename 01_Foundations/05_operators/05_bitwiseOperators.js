/*
 * Bitwise operators are used to perform operations on the binary representations of integers.
 * They operate on the individual bits of the operands and return a new integer based on the result of the operation. 
 */

/*
 * Bitwise AND (&)
 * Compares each bit of two numbers and returns a new number where each bit is set to 1 if both corresponding bits are 1.
 */
let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011
let result = a & b; // Binary: 0001 (Decimal: 1)
console.log(result); // Output: 1

/*
 * Bitwise OR (|)
 * Compares each bit of two numbers and returns a new number where each bit is set to 1 if at least one of the corresponding bits is 1. 
 */
let x = 5;  // Binary: 0101
let y = 3;  // Binary: 0011
let result1 = a | b; // Binary: 0111 (Decimal: 7)
console.log(result1); // Output: 7

/*
 * Bitwise XOR (^)
 * Compares each bit of two numbers and returns a new number where each bit is set to 1 if the corresponding bits are different. 
 */
let c = 5;  // Binary: 0101
let d = 3;  // Binary: 0011
let result2 = a ^ b; // Binary: 0110 (Decimal: 6)
console.log(result2); // Output: 6

/*
 * Bitwise NOT (~)
 * nverts the bits of a number. Each 0 becomes 1 and each 1 becomes 0.
 * It also adds 1 to the result due to how negative numbers are represented in binary (two's complement). 
 */
let num = 5;  // Binary: 0101
let result3 = ~num; // Binary: 1010 (Decimal: -6)
console.log(result3); // Output: -6

/*
 * Left Shift (<<)
 * Shifts the bits of the first operand to the left by the number of positions specified by the second operand.
 * This effectively multiplies the number by 2 for each shift. 
 */
let num1 = 5;  // Binary: 0101
let result4 = num1 << 1; // Binary: 1010 (Decimal: 10)
console.log(result4); // Output: 10

/*
 * Right Shift (>>)
 * Shifts the bits of the first operand to the right by the number of positions specified by the second operand.
 * This effectively divides the number by 2 for each shift, preserving the sign of the number. 
 */
let num2 = 5;  // Binary: 0101
let result5 = num2 >> 1; // Binary: 0010 (Decimal: 2)
console.log(result5); // Output: 2

/**
 * Unsigned Right Shift (>>>)
 * Shifts the bits of the first operand to the right by the number of positions specified by the second operand,
 * filling the leftmost bits with 0 regardless of the sign of the number.
 */
let num3 = -5; // Binary: 11111111111111111111111111111011 (32-bit representation)
let result6 = num3 >>> 1; // Binary: 01111111111111111111111111111101 (Decimal: 2147483645)
console.log(result6); // Output: 2147483645