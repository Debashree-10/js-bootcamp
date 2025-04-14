/*
 * Understanding Variables in JavaScript
 * 
 * Variables act as containers for storing data values.
 * JavaScript variables are dynamically typed, so explicit type declarations are unnecessary.
 * The type is inferred automatically based on the assigned value.
 * 
 * Variable declarations:
 * - var: function-scoped, can be redeclared and updated (less preferred in modern code).
 * - let: block-scoped, can be updated but not redeclared within the same scope.
 * - const: block-scoped, must be initialized at declaration and cannot be reassigned.
 */

var x = 10; // Function-scoped variable (usage generally discouraged in modern code)
let y = 20; // Block-scoped variable, value can be updated
const z = 30; // Block-scoped constant, value cannot be reassigned

console.log("value of x: ", x); // Output: 10
console.log("value of y: ", y); // Output: 20
console.log("value of z: ", z); // Output: 30

y = 40; // Reassignment allowed for 'let' variables
console.log("updated value of y: ", y); // Output: 40

// Attempting to reassign a 'const' variable will result in a TypeError
// z = 50; // Uncaught TypeError: Assignment to constant variable.

// Declaring variables for user account details
let accountEmail = "debashree@gmail.com";
var accountPassword = "12345";
// Implicit global variable (not recommended)
accountCity = "Mumbai"; // No declaration keyword, becomes global
let accountState; // Declaring a variable without assigning a value initializes it with 'undefined' by default.

/*
 * Displays the array values in a table with 'index' and 'value' columns,
 * where 'index' is the array position and 'value' is the variable content.
 */
console.table([accountEmail, accountPassword, accountCity, accountState]);

accountEmail = "dj@gmail.com";
accountPassword = "54321";
accountCity = "Bengaluru"; // Updating implicit global variable

/*
 * Each object represents a row in the table with two columns: 'Property' and 'Value'
 * 'Property' is the name/key describing the data
 * 'Value' is the corresponding data stored in the variable
 */
console.table([
    { Property: "Email", Value: accountEmail },
    { Property: "Password", Value: accountPassword },
    { Property: "City", Value: accountCity },
    { Property: "State", Value: accountState}
]);