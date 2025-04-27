/*
 * n JavaScript, the unary negation operator is represented by the - symbol.
 * When applied to a number, it converts the number to its negative equivalent.
 * If the operand is already negative, it will convert it to positive.
 */

/*
 * Positive to Negative: 
 * If the operand is a positive number, applying unary negation will result in a negative number.
 */
let positiveValue = 5; // positiveValue is a positive number
let negatedPositive = -positiveValue; // negatedPositive becomes -5
console.log(negatedPositive); // Output: -5

/*
 * Negative to Positive:
 * If the operand is a negative number, applying unary negation will result in a positive number.
 */
let negativeValue = -10; // negativeValue is a negative number
let negatedNegative = -negativeValue; // negatedNegative becomes 10
console.log(negatedNegative); // Output: 10

/*
 * Non-numeric Types:
 * If the operand is a non-numeric type (like a string), JavaScript will attempt to convert it to a number before applying the negation.
 */

// Negation of Zero
let zeroValue = 0; // zeroValue is zero
let negatedZero = -zeroValue; // negatedZero becomes -0
console.log(negatedZero); // Output: -0

// String to Number Conversion
let stringValue = "20"; // stringValue is a string
let negatedString = -stringValue; // JavaScript converts "20" to 20 and negates it
console.log(negatedString); // Output: -20

// Non-numeric String
let nonNumericValue = "hello"; // nonNumericValue is a non-numeric string
let negatedNonNumeric = -nonNumericValue; // JavaScript attempts to convert "hello" to a number
console.log(negatedNonNumeric); // Output: NaN (Not a Number)

// Boolean Values: JavaScript converts true to 1 and false to 0 before applying the negation.
let trueValue = true; // trueValue is a boolean true
let negatedTrue = -trueValue; // true becomes 1, negated to -1
console.log(negatedTrue); // Output: -1

let falseValue = false; // falseValue is a boolean false
let negatedFalse = -falseValue; // false becomes 0, negated to -0
console.log(negatedFalse); // Output: -0

// Negation of null: null is converted to 0
let nullValue = null; // nullValue is null
let negatedNull = -nullValue; // null becomes 0, negated to -0
console.log(negatedNull); // Output: -0

// Negation of undefined: undefined becomes NaN.
let undefinedValue = undefined; // undefinedValue is undefined
let negatedUndefined = -undefinedValue; // undefined becomes NaN
console.log(negatedUndefined); // Output: NaN

// Empty and Whitespace Strings:  An empty string or a string with only spaces is converted to 0.
let emptyString = ""; // emptyString is an empty string
let negatedEmptyString = -emptyString; // "" becomes 0
console.log(negatedEmptyString); // Output: -0

let whitespaceString = "   "; // whitespaceString contains only spaces
let negatedWhitespace = -whitespaceString; // "   " becomes 0
console.log(negatedWhitespace); // Output: -0

// Arrays:  A single-element array is converted to the number inside it.  An empty array is converted to 0.
let arrayValue = [10]; // arrayValue is a single-element array
let negatedArray = -arrayValue; // [10] becomes 10
console.log(negatedArray); // Output: -10

let emptyArray = []; // emptyArray is an empty array
let negatedEmptyArray = -emptyArray; // [] becomes 0
console.log(negatedEmptyArray); // Output: -0

// Objects: Objects that can't be directly converted to a number result in NaN.
let objectValue = { num: 10 }; // objectValue is a plain object
let negatedObject = -objectValue; // object becomes NaN
console.log(negatedObject); // Output: NaN