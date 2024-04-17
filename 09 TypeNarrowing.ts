// Typeof Narrowing:
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

// Truthiness Narrowing:
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("YOU DID NOT PASS IN A WORD!");
  }
};
