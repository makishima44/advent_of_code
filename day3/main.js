const fs = require("fs");

//------------------------------ Part 1---------------------------------------------//
function solve1(file) {
  const data = fs.readFileSync(file, "utf-8");
  const find = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = data.match(find);

  let sum = 0;

  for (const el of matches) {
    const numbers = el.match(/\d+/g);
    const first = Number(numbers[0]);
    const second = Number(numbers[1]);
    sum += first * second;
  }

  return sum;
}

const result1 = solve1("./day3/text.txt");
// console.log(result1);

