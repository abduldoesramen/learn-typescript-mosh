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
