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