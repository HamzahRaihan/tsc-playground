// * Annotation in depth
// export const myName: string = 'Hamzah';

// console.log(myName);

// function stringMessage(message: string): string {
//   return message;
// }
// const message = stringMessage('Hallo TypeScript');
// console.log(message);

// * Any Type
// let color: any = 'crimson';
// color = 20;
// color = true;
// color.toUpperCase();
// console.log(color);

// * Function Parameter Annotation
// Regular Func
// function addOne(num: number) {
//   return num + 1;
// }

// const newNumber = addOne(4);
// console.log(newNumber);

// arrow function
// const double = (x: number, y: number) => x * y;
// const res = double(2, 10);
// console.log(res);

// * Default params value
// function greet(person: string = 'Anonymous') {
//   return `hello ${person}`;
// }
// const resGreet = greet();
// console.log(resGreet);

// * return annotations (Regular)
// regular function
// function double1(x: number): number {
//   return x * x;
// }
// const res3 = double1(3);
// console.log(res3);
// arrow function
// const double2 = (x: number): number => x * x;
// const res = double2(2);
// console.log(res);

/* 
Void in TypeScript is a type that represent the absence of any value.
it ids often used as a return type for function that do not return a value
*/

// Void Function
// function printMessage(message: string): void {
//   console.log('This is my message:', message);
// }
// printMessage('Hallo semuanya');

/* 
Never, The never keyword is used to indicate that a function will not return anything, or that a variable can never a have a value. the never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. it can help catch errors at compile-time instead of runtime.

Never keyword often used for:
1. a function that always throws an error
2. a function that has an infinite loop
3. a variable that can never have a value
*/

// example never keyword
// function throwError(msg: string): never {
//   throw new Error(msg);
// }

/* 
Array types, array are a type of object that can store multiple values of the same data type. arrays in typescript are typed, which means you can specify the type of values that an array can hold
*/

// * Array type
// const nums: number[] = [1, 2, 3, 4];
// const str: string[] = ['john', 'doe'];

// nums.push(5);
// str.push('keyboard');

// console.log(`'string array ${str}' and 'number array ${nums}'`);

// * Using object as function return value
// const person: { firstname: string; lastname: string; age: number } = {
//   firstname: 'Hamzah',
//   lastname: 'raihan',
//   age: 22,
// };

// console.log(`name: ${person.firstname} ${person.lastname}, age: ${person.age}`);

// function parameter
function printUser(): { name: string; age: number; location: string } {
  return {
    name: 'Hamzah',
    age: 22,
    location: 'indonesia',
  };
}

const res = printUser();
console.log(res);
