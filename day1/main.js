// Part 1

const fs = require("fs");

function solve(file) {
  const data = fs.readFileSync(file, "utf-8");
  const rows = data.split("\n").map((row) => row.replace("\r", ""));

  let column1 = [];
  let column2 = [];

  rows.forEach((row) => {
    const [num1, num2] = row.split(/\s+/);
    column1.push(Number(num1));
    column2.push(Number(num2));
  });

  let sortColumn1 = column1.sort((a, b) => a - b);
  let sortColumn2 = column2.sort((a, b) => a - b);

  let different = 0;
  const minLength = Math.min(sortColumn1.length, sortColumn2.length);

  for (let i = 0; i < minLength; i++) {
    different += Math.abs(sortColumn1[i] - sortColumn2[i]);
  }

  return different;
}

const result = solve("./day1/text.txt");

console.log(result);

// Part 2
