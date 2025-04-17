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