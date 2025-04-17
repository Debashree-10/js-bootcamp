/*
 * Converting Strings to Numbers
 * - Using Number()
 * - Using parseInt()
 * - Using parseFloat()
 * - Using the Unary Plus Operator (+)
 */

/*
 * Using Number()
 * The Number() function converts a string to a number.
 * If the string cannot be converted, it returns NaN (Not-a-Number).
 */

let str1 = "123";
let num1 = Number(str1); 
console.log(num1); // Output: 123
console.log(typeof(str1)); // Output: string
console.log(typeof(num1)); // Output: number

console.log(Number(3.14)); // Output: 3.14
console.log(Number(Math.PI)); // Output: 3.141592653589793

// An empty string (like "") converts to 0.
console.log(Number(" ")); // Output: 0
console.log(Number("")); // Output: 0

// A non numeric string (like "Hello") converts to NaN (Not a Number).
console.log(Number("Hello")); // Output: NaN

// Convert null to a number; null is converted to 0
let score = null;
console.log(Number(score)); // Output: 0

// Convert undefined to a number; undefined is converted to NaN (Not a Number)
let value = undefined;
console.log(Number(value)); // Output: NaN

// Convert true to a number; true is converted to 1
let trueValue = true; 
console.log(Number(trueValue)); // Output: 1

// Convert false to a number; false is converted to 0
let falseValue = false;
console.log(Number(falseValue)); // Output: 0

// Attempt to convert a non-numeric string to a number; results in NaN (Not a Number)
console.log(Number("Debashree10")); // Output: NaN

/*
 * Using parseInt()
 * The parseInt() function converts a string to an integer.
 * You can also specify the radix (base) for the conversion.
 * Converts to an integer, ignores decimals.
 */

let str2 = "123.45";
let intNum = parseInt(str2);
console.log(intNum); // Output: 123 (only the integer part is returned)

let str3 = "1010";
let binaryNum = parseInt(str3, 3);
console.log(binaryNum); // Output: 30

/*
 * Using parseFloat()
 * The parseFloat() function converts a string to a floating-point number.
 */

let str4 = "123.45";
let floatNum1 = parseFloat(str4);
console.log(floatNum1); // Output: 123.45

console.log(parseFloat("3.14Pi")); // Output: 3.14 (stops parsing at the first non-numeric character)
console.log(parseFloat("1.2Hello10.9")); // Output: 1.2

/*
 * Using the Unary Plus Operator (+)
 * You can also use the unary plus operator to convert a string to a number.
 */

let str5 = "123";
let num3 = +str5;
console.log(num3); // Output: 123

console.log(+"abc"); // Output: NaN