/*
 * String Declaration:
 * Strings can be created using single quotes ('), double quotes ("), or backticks (`) for template literals. 
 */

let singleQuoteString = 'Hello, World!';
console.log(singleQuoteString); // Output: Hello, World!

let doubleQuoteString = "Hello, World!";
console.log(doubleQuoteString); // Output: Hello, World!

let templateLiteralString = `Hello, World!`;
console.log(templateLiteralString); // Output: Hello, World!

/*
 * In JavaScript, the String object can be created using the new String() constructor. 
 */

/*
 * When you use new String(), you create an object wrapper around the string value.
 * This means fullName is an object, not a primitive string. 
 */ 
const fullName = new String('Debashree Jena'); // fullName is an object
console.log(fullName); // Output: [String: 'Debashree Jena'] => indicating that fullName is a String object containing the value 'Debashree Jena'.

/*
 * You can access individual characters of the string using bracket notation, just like with primitive strings.
 */
console.log(fullName[0]); // Output: D

/*
 * The __proto__ property gives you access to the prototype of the fullName object.
 * Since fullName is a String object, its prototype is String.prototype,
 * which contains methods and properties that can be used with String objects.
 */
console.log(fullName.__proto__);

const strPrimitive = 'Debashree Jena'; // strPrimitive is a primitive string
console.log(strPrimitive == fullName); // Output: false
console.log(strPrimitive === fullName); // Output: false

/*
 * String Operations:
 * - Concatenation
 * - String Interpolation
 * - String Length
 * - Accessing Characters
 * - String Methods
 */

/*
 * Concatenation:
 * You can concatenate strings using the + operator.
 */
let greeting = 'Hello';
let name = 'Deepa';
let message = greeting + ', ' + name + '!';
console.log(message); // Output: Hello, Deepa!

/*
 * String Interpolation:
 * It allows you to embed expressions (like variables) within a string.
 * This is done using template literals (backticks).
 */

/*
 * Basic String Interpolation:
 * You can insert variables directly into a string using ${variableName} syntax.
 */
let idName = 'Alice';
let age = 30;
let comment = `My name is ${idName} and I am ${age} years old.`;
console.log(comment); // Output: My name is Alice and I am 30 years old.

/*
 * Interpolating Expressions:
 * You can also include expressions within the interpolation.
 */
let a = 5;
let b = 10;
let sumMessage = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sumMessage); // Output: The sum of 5 and 10 is 15.

/*
 * String Length:
 * You can find the length of a string using the .length property.
 */
let str = 'Hello';
console.log(str.length); // Output: 5

/*
 * Accessing Characters:
 * You can access individual characters in a string using bracket notation. 
 */
let c = 'Hello';
console.log(c[0]); // Output: H

/*
 * String Methods:
 * A string method in JavaScript is a built-in function that performs an operation on a string (text).
 * These methods are part of the String object in JavaScript and allow you to manipulate, analyze, or transform string values.
 */
/*
 * charAt(index): Returns the character at the specified index.
 */
let string = "Deepa";
console.log(string.charAt(1)); // Output: "e"

/*
 * charCodeAt(index): Returns the UTF-16 code of the character at the specified index. 
 */
console.log("ABC".charCodeAt(1)); // Output: 66

/*
 * concat(str1, str2, ...): Joins multiple strings into one.
 */
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Output: "Hello World"

/*
 * includes(substring): Checks if the string contains a substring (case-sensitive). 
 */
console.log("JavaScript".includes("Script")); // Output: true

/*
 * endsWith(substring): Checks if the string ends with a specified substring. 
 */
console.log("OpenAI".endsWith("AI")); // Output: true

/*
 * startsWith(substring): Checks if the string starts with a specified substring. 
 */
console.log("Hello World".startsWith("Hello")); // Output: true

/*
 * indexOf(substring): Returns the index of the first occurrence of a substring. Returns -1 if not found. 
 */
console.log("banana".indexOf("na")); // Output: 2

/*
 * lastIndexOf(substring): Returns the last occurrence index of a substring. 
 */
console.log("banana".lastIndexOf("na")); // Output: 4

/*
 * match(regex): Returns an array of matches using a regular expression. 
 */
let str3 = "abc123def456";
console.log(str3.match(/\d+/g)); // Output: ["123", "456"]

/*
 * matchAll(regex): Returns an iterator of all matches (with groups). 
 */
let matches = "test1test2".matchAll(/test(\d)/g);
console.log([...matches]); // Output: Array of match objects


/*
 * padStart(length, padString): Pads the beginning of the string with another string.
 */
console.log("5".padEnd(3, "0")); // Output: "500"

/*
 * padEnd(length, padString): Pads the end of the string with another string. 
 */
console.log("5".padEnd(3, "0")); // Output: "500"

/*
 * repeat(count): Repeats the string a specified number of times. 
 */
console.log("ha".repeat(3)); //Output: "hahaha"

/*
 * replace(searchValue, replaceValue): Replaces the first match.
 */
console.log("I love cats".replace("cats", "dogs")); // Output: "I love dogs"

/*
 * replaceAll(searchValue, replaceValue): Replaces all matches. 
 */
console.log("a-a-a".replaceAll("-", "+")); // Output: "a+a+a"

/*
 * search(regex): Searches for a match and returns the index.
 */
console.log("hello world".search(/world/)); // Output: 6

/*
 * slice(start, end): Extracts a section of a string.
 */
console.log("Hello World".slice(0, 5)); // Output: "Hello"

/*
 * split(separator): Splits the string into an array by the separator. 
 */
console.log("a,b,c".split(",")); // Output: ["a", "b", "c"]

/*
 * substring(start, end): Extracts characters between two indices.
 */
console.log("JavaScript".substring(0, 4)); // Output: "Java"

/*
 * substr(start, length) (deprecated): Extracts a substring from a starting index and length.
 */
console.log("JavaScript".substr(4, 6)); // Output: "Script"

/*
 * toLowerCase(): Converts to lowercase. 
 */
console.log("HELLO".toLowerCase()); // Output: "hello"

/*
 * toUpperCase(): Converts to uppercase.
 */
console.log("hello".toUpperCase()); // Output: "HELLO"

/*
 * trim(): Removes whitespace from both ends. 
 */
console.log("  space  ".trim()); // Output: "space"

/*
 * trimStart() / trimLeft(): Removes whitespace from the beginning.
 */
console.log("   hello".trimStart()); // Output: "hello"
console.log("   hi".trimLeft()); // Output: "hi"

/*
 * trimEnd() / trimRight(): Removes whitespace from the end.
 */
console.log("hello   ".trimEnd()); // "hello"
console.log("hi   ".trimEnd()); // "hi"

/*
 * valueOf(): Returns the primitive value of a string.
 */
let strObj = new String("hello");
console.log(strObj.valueOf()); // Output: "hello"

/*
 * toString(): Returns a string representing the object.
 */
let strObj1 = new String("Hi");
console.log(strObj1.toString()); // Output: "Hi"
