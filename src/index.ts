/* types */
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level; /* any type but loses features of TS */

function render(document: any) {
  console.log(document);
}

/* arrays */
let numbers: number[] = [1, 2, 3];
let emptyArray: number[] = [];

/* tuples: fixed length array where each index has a specific type */
let user: [number, string] = [1, "Mosh"];
// Can check functions based on their type via intellisense:
// user[1].

/* ENUMS */
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase, default increments +=1
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

/* Functions */

// Default value -> optional parameter
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2023);
