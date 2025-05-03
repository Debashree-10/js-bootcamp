/*
 * Primitive Data Types:
 * These are the most basic data types in JavaScript. They are immutable and represent a single value.
 * Primitive Types: String, Number, BigInt, Boolean, Undefined, Null, Symbol
 */

/**
 * String:
 * Represents a sequence of characters.
 * Strings can be defined using single quotes, double quotes, or backticks (for template literals).
 */

// Defining strings using different methods
let userName = "Deepa"; // Double quotes
let greeting = 'Hello, ' + userName + '!'; // Concatenation with single quotes
let template = `Welcome, ${userName}!`; // Template literal for interpolation

// Logging the strings to the console
console.log(userName); // Output: Deepa
console.log(greeting); // Output: Hello, Deepa!
console.log(template); // Output: Welcome, Deepa!
console.log(typeof "Hello"); // Output: "string"

/*
 * Number:
 * Represents both integer and floating-point numbers.
 * JavaScript uses a double-precision 64-bit binary format (IEEE 754).
 * The maximum safe integer in JavaScript is 2^53 - 1 (or 9007199254740991).
 */

// Defining numbers
let age = 18; // An integer
let height = 5.9; // A floating-point number

// Demonstrating safe integer limits
let minSafeInteger = Number.MIN_SAFE_INTEGER; // -9007199254740991
let maxSafeInteger = Number.MAX_SAFE_INTEGER; // 9007199254740991
let exceedsSafeInteger = maxSafeInteger + 1; // May lead to precision issues

// Logging the numbers to the console
console.log("Age:", age); // Output: Age: 18
console.log("Height:", height); // Output: Height: 5.9
console.log("Min Safe Integer", minSafeInteger); // Output: -9007199254740991
console.log("Max Safe Integer:", maxSafeInteger); // Output: Max Safe Integer: 9007199254740991
console.log("Exceeds Safe Integer:", exceedsSafeInteger); // Output: Exceeds Safe Integer: 9007199254740992
console.log(typeof 42); // Output: "number"

/*
 * BigInt:
 * A built-in object that provides a way to represent whole numbers larger than Number.MAX_SAFE_INTEGER.
 * This allows developers to work with arbitrarily large integers without losing precision.
 */

// Creating BigInt values
const bigIntFromLiteral = 1234567890123456789012345678901234567890n; // Using 'n' suffix
const bigIntFromConstructor = BigInt("1234567890123456789012345678901234567890"); // Using constructor

console.log(typeof 1234567890123456789012345678901234567890n); // Output: "bigint"

/*
 * Boolean:
 * Represents a logical entity and can have two values: true or false.
 */
let isActive = true; // Active state
let isLoggedIn = false; // Logged-in state
console.log(typeof true); // Output: "boolean"

/*
 * Undefined:
 * A variable that has been declared but has not yet been assigned a value is of type undefined.
 */
let x; // Declared but not assigned
console.log(x); // Output: undefined
console.log(typeof x); // Output: "undefined"

/*
 * Null:
 * Represents the intentional absence of any object value.
 * It is a primitive value that is treated as a falsy value.
 */
let y = null; // Explicitly set to null
console.log(y); // Output: null
console.log(typeof y); // Output: "object"

/*
 * In JavaScript, Symbol is a built-in object that provides a way to create unique and immutable identifiers.
 * Each Symbol value is unique, meaning that even if two Symbol values are created with the same description,
 * they are not equal to each other.
 */
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // Output: false
console.log(typeof Symbol("id")); // Output: "symbol"

/*
 * Reference Data Types:
 * These types are more complex and can hold collections of values or more complex entities.
 * Reference Types: Object, Array, Function
 */

/*
 * Object:
 * The most common reference type, objects are collections of key-value pairs.
 * They can store multiple values and more complex entities.
 */
let userDetails = {
    userName: "Debashree",
    userAge: 25,
    isEmployed: true
};

console.log(userDetails);
console.log(typeof userDetails); // Output: "object"

/*
 * Array:
 * A special type of object used to store ordered collections of values.
 * Arrays can hold elements of any type.
 */
let fruits = ["apple", "banana", "cherry", "mango"];

// Accessing elements
console.log(fruits[0]); // Output: apple
console.log(fruits.length); // Output: 4
console.log(typeof [1, 2, 3]); // Output: "object" (arrays are a type of object)

// Adding an element
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "cherry", "mango", "orange"]

/*
 * Function:
 * Functions in JavaScript are also objects and can be assigned to variables,
 * passed as arguments, and returned from other functions.
 */
function greet() {
    console.log("Hello!");
}

// Calling the function
greet(); // Output: Hello!

console.log(greet()); // Output: undefined
// The undefined is printed because the greet function does not have a return statement, so it implicitly returns undefined after logging "Hello!" to the console.

console.log(typeof greet); // Output: function

function greetings() {
    console.log("Hello!"); // This prints "Hello!" to the console.
    return "Greeting sent"; // This returns a string when the function is called.
}

greetings(); // Output: Hello

console.log(greetings()); // This logs the return value of the greet function.

// Assigning a function to a variable
let sayGoodbye = function() {
    console.log("Goodbye!");
};

// Calling the assigned function
sayGoodbye(); // Output: Goodbye!

// Function as an argument
function executeFunction(fn) {
    fn(); // Calls the passed function
}

executeFunction(greet); // Output: Hello