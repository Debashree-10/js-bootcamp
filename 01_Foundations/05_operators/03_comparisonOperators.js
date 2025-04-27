/*
 * Comparison Operators in JavaScript
 * Comparison operators are used to compare two values and return a boolean result (true or false).
 * They are essential for making decisions in your code, such as in conditional statements (e.g., if, while)
 */

/*
 * Equal (==)
 * The equal operator checks if two values are equal, performing type coercion if necessary.
 */
console.log(5 == '5'); // true (string '5' is coerced to number 5)
console.log(0 == false); // true (false is coerced to 0)
console.log(1 == true); // true (true is coerced to 1)

/*
 * Strict Equal (===)
 * The strict equal operator checks if two values are equal without performing type coercion.
 * Both the value and the type must be the same.
 */
console.log(5 === '5'); // false (different types)
console.log(5 === 5); // true (same type and value)

/*
 * Not Equal (!=)
 * The not equal operator checks if two values are not equal, performing type coercion if necessary. 
 */
console.log(5 != '5'); // false (string '5' is coerced to number 5)
console.log(0 != false); // false (false is coerced to 0)

/*
 * Strict Not Equal (!==)
 * The strict not equal operator checks if two values are not equal without performing type coercion.
 * If the types are different, it returns true.
 */
console.log(5 !== '5'); // true (different types)
console.log(5 !== 5); // false (same type and value)

/*
 * Greater Than (>)
 * The greater than operator checks if the left operand is greater than the right operand. 
 */
console.log(10 > 5); // true
console.log(5 > 10); // false

// Compare a string and a number
console.log("2" > 1); // true

/*
 *  Less Than (<)
 * The less than operator checks if the left operand is less than the right operand.
 */
console.log(5 < 10); // true
console.log(10 < 5); // false

/*
 * Greater Than or Equal To (>=)
 * The greater than or equal to operator checks if the left operand is greater than or equal to the right operand. 
 */
console.log(10 >= 10); // true
console.log(5 >= 10); // false

/*
 * Less Than or Equal To (<=)
 * The less than or equal to operator checks if the left operand is less than or equal to the right operand. 
 */
console.log(5 <= 10); // true
console.log(10 <= 5); // false

// Check if null is loosely equal to 0
console.log(null == 0); // false
// Explanation: The loose equality operator does not coerce null to a number, so it returns false.

// Check if null is greater than 0
console.log(null > 0); // false
// Explanation: null is converted to 0 for comparison, and since 0 is not greater than 0, it returns false.

// Check if null is greater than or equal to 0
console.log(null >= 0); // true
// Explanation: Since null is treated as 0, and 0 is equal to 0, this comparison returns true.

// Check if undefined is loosely equal to 0
console.log(undefined == 0); // false
// Explanation: undefined is not equal to 0, so it returns false.

// Check if undefined is greater than 0
console.log(undefined > 0); // false
// Explanation: undefined cannot be compared to a number, resulting in false.

// Check if undefined is greater than or equal to 0
console.log(undefined >= 0); // false
// Explanation: undefined is not a valid number for comparison, so it returns false.