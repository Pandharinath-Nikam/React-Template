// Pattern:-

let n = 5,
  c,
  k,
  space = 1;

process.stdout.write("\n");
space = n - 1;
for (k = 1; k <= n; k++) {
  let i = 1;
  for (c = 1; c <= space; c++) process.stdout.write(" ");
  space--;
  for (c = 1; c <= 2 * k - 1; c++) {
    process.stdout.write(i.toString());
    i = i + 2;
  }

  process.stdout.write("\n");
}

let string = " ";
// External loop
for (let i = 1; i <= n; i++) {
  // creating spaces
  for (let j = 1; j < i; j++) {
    string += " ";
  }
  // creating alphabets
  for (let k = 0; k < 2 * (n - i + 1) - 1; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
console.log(string);
