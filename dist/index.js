"use strict";
// * Annotation in depth
// export const myName: string = 'Hamzah';
Object.defineProperty(exports, "__esModule", { value: true });
function printName(person) {
    return `Name: ${person.name},Age: ${person.age},Location: ${person.location}`;
}
const res = printName({
    name: 'hamzah',
    age: 22,
    location: 'Indonesia',
});
console.log(res);
//# sourceMappingURL=index.js.map