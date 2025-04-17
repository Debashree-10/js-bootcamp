/*
 * In JavaScript, type conversion refers to the process of converting a value from one data type to another.
 * This can happen either implicitly (automatically by the JavaScript engine) or explicitly (manually by the developer).
 */

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

/*
 * Converting Numbers to Strings
 * - Using String()
 * - Using toString()
 * - Using String Concatenation
 * - Using Template Literals
 */

/*
 * Using String()
 * The String() function can be used to convert a number to a string.
 * It can be used on any type of numbers, literals, variables, or expressions
 */

let num4 = 1009;
let str6 = String(num4);
console.log(str6); // Output: "1009"

// Declare a variable x without initializing it (x is undefined
let x;
console.log(String(x)); // Output: "undefined" => Convert the undefined variable x to a string

console.log(String(123)); // Output: "123"
console.log(String(100 + 11)); // Output: "111"

/*
 * Using String Concatenation
 * You can concatenate a number with an empty string ("") to convert it to a string.
 */

let num = 321;
let str = num + "";
console.log(str); // Output: "321"

/*
 * Using Template Literals
 * You can use template literals (backticks) to convert a number to a string.
 */

let num5 = 101112;
console.log(`${num5}`); // Output: "101112"

/*
 * Converting Numbers to Boolean
 * - Using Boolean()
 */

// Convert one to boolean; one is converted to true
let isLoggedIn = 1;
console.log(Boolean(isLoggedIn)); // Output: true

// Convert zero to boolean; zero is converted to false
console.log(Boolean(0)); // Output: false

// Convert positive number to boolean; any non-zero number is converted to true
console.log(Boolean(10)); // Output: true

// Convert negative number to boolean; any non-zero number is converted to true
console.log(Boolean(-4)); // Output: true

// Convert empty string to boolean; an empty string is converted to false
console.log(Boolean("")); // OOutput: false

// Convert non-empty string to boolean; any non-empty string is converted to true
console.log(Boolean("Hello!")); // OOutput: true

/*
 * Converting Dates to Numbers
 * - Using getTime()
 * - using Number()
 * - using valueOf()
 * - Using the Unary Plus Operator (+)
 */

/*
 * Using getTime()
 * The getTime() method returns the number of milliseconds since the Unix epoch.
 */

let date = new Date();
console.log(date.getTime());

/*
 * Using Number()
 * The global method Number() can be used to convert dates to numbers.
 */

console.log(Number(date));

/*
 * Using valueOf()
 * The valueOf() method returns the primitive value of a Date object, which is the same as calling getTime().
 */

console.log(date.valueOf());

/*
 * Using the Unary Plus Operator (+)
 * You can also use the unary plus operator to convert a Date object to a number, which will give you the timestamp in milliseconds.
 */

console.log(+date);