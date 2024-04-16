// Providing a type to querySelector:
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// Without Generics...Lots of Repetition!
function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any{
//   return item;
// }

// With A Generic...Super Reusable!
function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<string>("hello");

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]);
getRandomElement([1, 2, 3, 4]);

// If you are working with React and TypeScript then your file will be tsx
// and jsx confuse generics <> with html then we need to add <type,> in tsx
// For Example
// function getRandomElement<T,>(list: T[]): T {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }

// Generics With Constraints:
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(merge({ name: "Colt" }, { num: 9 }));
merge<{ name: string }, { pets: string[] }>(
  { name: "colt" },
  { pets: ["blue", "elton"] }
);

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// function printDoubleLength(thing: Lengthy): number {
//   return thing.length * 2;
// }

printDoubleLength("asdasd");
printDoubleLength(234); //Not allowed!