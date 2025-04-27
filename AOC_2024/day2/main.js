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
// console.log(result1);

//------------------------------ Part 2---------------------------------------------//

function solve2(file) {
  const data = fs.readFileSync(file, "utf-8");

  const arr = data.split("\n").map((el) => el.replace("\r", ""));
  const arrOfNumbers = arr.map((el) => el.split(/\s+/).map(Number));

  let count = 0;

  for (const report of arrOfNumbers) {
    let isIncreas = true;
    let isDecreas = true;
    let safeReport = true;

    for (let i = 0; i < report.length - 1; i++) {
      const different = Math.abs(report[i] - report[i + 1]);

      if (different < 1 || different > 3) safeReport = false;
      if (report[i] < report[i + 1]) isDecreas = false;
      if (report[i] > report[i + 1]) isIncreas = false;
    }

    if (safeReport && (isIncreas || isDecreas)) {
      count++;
      continue;
    }

    const canMadeSafe = report.some((_, idx) => {
      const modifiedReport = report.toSpliced(idx, 1);

      let modiSafeReport = true;
      let modifiedIsIncreas = true;
      let modifiedIsDecreas = true;

      for (let i = 0; i < modifiedReport.length - 1; i++) {
        const diff = Math.abs(modifiedReport[i] - modifiedReport[i + 1]);

        if (diff < 1 || diff > 3) modiSafeReport = false;
        if (modifiedReport[i] < modifiedReport[i + 1]) modifiedIsDecreas = false;
        if (modifiedReport[i] > modifiedReport[i + 1]) modifiedIsIncreas = false;
      }

      return modiSafeReport && (modifiedIsIncreas || modifiedIsDecreas);
    });

    if (canMadeSafe) {
      count++;
    }
  }

  return count;
}

const result2 = solve2("./day2/text.txt");
// console.log(result2);
