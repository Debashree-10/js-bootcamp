/*
 * In JavaScript, memory management is handled through two main areas: the stack and the heap.
 */

/*
 * The stack is a region of memory that stores primitive values (like numbers, strings, booleans, etc.)
 * and references to objects. It operates in a last-in, first-out (LIFO) manner.
 * When a function is called, a new block is created on the stack for that function's execution context,
 * which includes its local variables and parameters. When the function returns, that block is removed from the stack.
 */

function add(a, b) {
    return a + b; // a and b are stored in the stack
}

let result = add(5, 10); // The values 5 and 10 are pushed onto the stack
console.log(result); // Outputs: 15

/**
 * The heap is a region of memory used for dynamic memory allocation.
 * It is where objects, arrays, and functions are stored. Unlike the stack,
 * the heap does not have a strict order for allocation and deallocation.
 * When you create an object or an array, it is stored in the heap,
 * and a reference to that memory location is stored in the stack.
 */

let person = {
    name: "Alice",
    age: 30
}; // The object is stored in the heap

console.log(person.name); // Outputs: Alice

let numbers = [1, 2, 3, 4, 5]; // The array is also stored in the heap
console.log(numbers[2]); // Outputs: 3