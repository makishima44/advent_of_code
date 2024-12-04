const fs = require("fs");

//------------------------------ Part 1---------------------------------------------//
function solve1(file) {
  const data = fs.readFileSync(file, "utf-8");

  const arr = data.split("\n").map((el) => el.replace("\r", ""));
  const arrOfNumbers = arr.map((el) => el.split(/\s+/).map(Number));

  let count = 0;

  for (let i = 0; i < arrOfNumbers.length; i++) {
    let isIncreas = true;
    let isDecreas = true;
    let safeReport = true;

    for (let j = 0; j < arrOfNumbers[i].length - 1; j++) {
      const different = Math.abs(arrOfNumbers[i][j] - arrOfNumbers[i][j + 1]);

      if (different < 1 || different > 3) {
        safeReport = false;
        break;
      }

      if (arrOfNumbers[i][j] < arrOfNumbers[i][j + 1]) isDecreas = false;
      if (arrOfNumbers[i][j] > arrOfNumbers[i][j + 1]) isIncreas = false;
    }

    if ((isIncreas || isDecreas) && safeReport) {
      count += 1;
    }
  }

  return count;
}

const result1 = solve1("./day2/text.txt");
console.log(result1);

//------------------------------ Part 2---------------------------------------------//
