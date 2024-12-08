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

//------------------------------ Part 2---------------------------------------------//

function solve2(file) {
  const data = fs.readFileSync(file, "utf-8");
  const find = /mul\((\d{1,3}),(\d{1,3})\)|don't\(\)|do\(\)/g;
  const matches = data.match(find);

  let sum = 0;
  let canMultiply = true;

  for (const el of matches) {
    const mulMatch = el.match(/mul\((\d{1,3}),(\d{1,3})\)/);
    // console.log(mulMatch);
    if (canMultiply && mulMatch) {
      const first = Number(mulMatch[1]);
      const second = Number(mulMatch[2]);
      sum += first * second;
    } else if (el === "don't()") {
      canMultiply = false;
    } else if (el === "do()") {
      canMultiply = true;
    }
  }

  return sum;
}

const result2 = solve2("./day3/text.txt");
// console.log(result2);
