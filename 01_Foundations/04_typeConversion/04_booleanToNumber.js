/*
 * In JavaScript, boolean values can be converted to numbers using type coercion.
 * The boolean value true is converted to 1, and the boolean value false is converted to 0.
 * This conversion can occur implicitly in expressions or explicitly using the unary plus operator (+).
 */

/*
 * Using the Unary Plus Operator
 */
console.log(+true);  // Output: 1
console.log(+false); // Output: 0

/*
 * Using Arithmetic Operations
 */
console.log(true + 5);  // Output: 6
console.log(false + 5); // Output: 5

/*
 * Using the Number() Function
 */
console.log(Number(true));  // Output: 1
console.log(Number(false)); // Output: 0

/*
 * Using Comparisons
 */
console.log(true == 1);   // Output: true
console.log(false == 0);  // Outputt: true