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
 * Using toString()
 * The toString() method in JavaScript returns a number as a string.
 */

console.log((123).toString()); // Output: "123"
console.log((100+ 11).toString()); // Output: "111"

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