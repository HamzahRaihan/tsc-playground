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
 * Void in TypeScript is a type that represent the absence of any value. it is often used as a return type for function that do not return a value
 */

// Void Function
// function printMessage(message: string): void {
//   console.log('This is my message:', message);
// }
// printMessage('Hallo semuanya');

/* 
* Never, The never keyword is used to indicate that a function will not return anything, or that a variable can never a have a value. the never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. it can help catch errors at compile-time instead of runtime.

* Never keyword often used for:
1. a function that always throws an error
2. a function that has an infinite loop
3. a variable that can never have a value
*/

// example never keyword
// function throwError(msg: string): never {
//   throw new Error(msg);
// }

/*
 *Array types, array are a type of object that can store multiple values of the same data type. arrays in typescript are typed, which means you can specify the type of values that an array can hold
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
// function printUser(): { name: string; age: number; location: string } {
//   return {
//     name: 'Hamzah',
//     age: 22,
//     location: 'indonesia',
//   };
// }

// const res = printUser();
// console.log(res);

/*
 * Type aliases, a type alias is a way to create a new name for an existing type. it allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name. type aliases are defined using the type keyword followed by the name of the alias, an equal sign (=), and the type it refers to.
 */

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// function printName(person: Person) {
//   return `Name: ${person.name},Age: ${person.age},Location: ${person.location}`;
// }
// const res = printName({
//   name: 'hamzah',
//   age: 22,
//   location: 'Indonesia',
// });

// console.log(res);

/*
 * Multidimensional Array, multi dimensional arrays an be defined using the same notation as single dimensional arrays, but with nested square brackets
 */

// const oneDimension: number[] = [1, 2, 3, 4];
// const multiDimension: number[][] = [[1, 2, 3]];
// const tripleDimension: number[][][] = [[[1, 2, 3, 4]]];

/*
 * optional properties, object type by adding question mark (?) after property name make it an optional props. So the properties does not required/optional
 */

// type Person = {
//   name: string;
//   age: number;
//   email?: string;
// };

// const printPerson = (person: Person) => {
//   if (person.email) {
//     return `${person.name}, ${person.age}, ${person.email} `;
//   }
//   return `${person.name}, ${person.age}`;
// };

// const res = printPerson({
//   name: 'Hamzah',
//   age: 2,
// });
// console.log(res);

// * Readonly property
// type Person = {
//   name: string;
//   age: number;
//   email?: string;
//   readonly location: string;
// };
// const printPerson: Person = {
//   name: 'Hamzah',
//   age: 2,
//   email: 'raihan@gmail.com',
//   location: 'Purwa',
// };

// printPerson.location = 'Bandung';

/*
 * Intersection types, is a way to combine multiple type into single type that include all the properties methods of each constituent
 */

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   id: number;
//   title: string;
// };

// type PersonAndEmployee = Person & Employee;

// const printEmployee: PersonAndEmployee = {
//   name: 'Hamzah',
//   age: 2,
//   id: 2444,
//   title: 'Software Engineer',
// };

// console.log(printEmployee);

/*
 * Unions, are used to declare a type that can have one of several possible types. unions are useful when we want to allow a variable or parameter to accept multiple types
 */

// const password: number | string = 2;

// type User = {
//   name: string;
//   age: number;
// };

// type Account = {
//   email: string;
//   password: string;
// };

// const UserInfo: User | Account = {
//   email: '@gmail',
//   password: 'pass',
// };

// const arrayString: (number | string)[] = [1, 2, 3, 'string'];

/*
 * Literal types, allow you to specify a value that can only be one specific literal value
 */

// let color: 'blue' | 'green' | 'red';

// color = 'blue';
// color = 'green';

// let token: 'tokenauth' = 'tokenauth';

// token = 'something';
// console.log(token);

// console.log(color);

/*
 * Tuples, is a type that represent an array with fixed number of elements
 */

// let myTuple: [string, number];

// myTuple = ['hello', 2];

// const [a, b] = myTuple;
// console.log(a);
// console.log(b);

// const games: [string, number, boolean] = ['elden ring', 3, true];
// const drinks: [string, number, boolean] = ['grimace shake', 2, false];

// const products: (number | string | boolean)[][] = [games, drinks];

// console.log(products);

/*
 * enums, is a way to define a set of named constants
 */

// enum WeatherConditions {
//   Sunny = 'sunny',
//   Rainy = 'rainy',
//   Cloudy = 'cloudy',
//   Snowy = 'snowy',
// }

// const currentWeather = WeatherConditions.Snowy;

/*
 * class properties annotation, this allow define the data type of the property and ensure that it is always consistent.
 */

// class Person {
//   readonly name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person('hamzah', 2);

// console.log(person);

/*
 * access mofifiers, you can use access modifiers to control the visibility of class members (properties and methods).
 */

// * Public: members marked as public can be accessed from anywhere, both inside and outside the class

// * Private: members marked as private can only be accessed from within the class they are defined in

// * Protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class

// class Person {
//   private first: string; // private modifiers can only be accessed inside the class
//   public last: string; // public modifiers can be accessed inside and outside the class
//   protected age: number;

//   constructor(first: string, last: string, age: number) {
//     this.first = first;
//     this.last = last;
//     this.age = age;
//   }

//   getName(): string {
//     return `Name: ${this.first} ${this.last}, Age: ${this.age}`;
//   }
// }

// class User extends Person {
//   constructor(first: string, last: string, age: number) {
//     super(first, last, age);
//     this.last = last;
//     this.age = age;
//   }
// }

// const p1 = new Person('John', 'Doe', 22);
// console.log(p1.getName());

// const jack = new User('Jack', 'Ma', 23);

/*
 * Getters and Setters, are used to access modify class properties.
 */

// class MyNumber {
//   public _myNumber: number = 0;

//   get myNumber(): number {
//     return this._myNumber;
//   }

//   set setNumber(value: number) {
//     this._myNumber = value;
//   }
// }

// const myInstance = new MyNumber();
// console.log(`Current value ${myInstance.myNumber}`);

// myInstance.setNumber = 20;
// console.log(`Current value ${myInstance.myNumber}`);

/*
 * Interface, is a way to define a contract for the shape of an object. it specifies the properties and their types that an object must have. interfaces are powerful tool for enforcing a certain structure in your code. Interfaces in typescript can also be used to describe the shape of function and classes
 */

// interface Computer {
//   name: string;
//   ram: number;
//   hdd: number;
// }

// const myComputer: Computer = {
//   name: 'Asus',
//   ram: 80000,
//   hdd: 2000,
// };

// console.log(myComputer);

// interface Vehicle {
//   start(): void;
//   stop(): void;
// }

// class Car implements Vehicle {
//   start(): void {
//     console.log('Car is moving');
//   }
//   stop(): void {
//     console.log('Car is stopping');
//   }
// }

// const myCar = new Car();

// myCar.start();

// interface MathOperation {
//   add(): void;
//   subtract(): void;
//   x: number;
//   y: number;
// }

// class MathOperationImpl implements MathOperation {
//   public x: number;
//   public y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   add(): void {
//     console.log(`${this.x + this.y}`);
//   }
//   subtract(): void {
//     console.log(`${this.x - this.y}`);
//   }
// }

// const MathOp = new MathOperationImpl(4, 3);
// MathOp.add();
// MathOp.subtract();
