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