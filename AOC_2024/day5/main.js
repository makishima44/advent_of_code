const fs = require("fs");

//------------------------------ Part 1---------------------------------------------//
function solve1(file) {
  const data = fs.readFileSync(file, "utf-8");
  const arr = data
    .split("\n")
    .map((el) => el.replace("\r", ""))
    .filter((el) => el.trim() !== "");

  const rulesArr = [];
  const updateArr = [];
  const correctUpdateArr = [];

  arr.forEach((el) => {
    if (el.length === 5) {
      rulesArr.push(el.split("|").map(Number));
    } else {
      updateArr.push(el.split(",").map(Number));
    }
  });

  for (let update of updateArr) {
    let updateCorrect = true;

    for (let i = 0; i < update.length - 1; i++) {
      let updatePair = [update[i], update[i + 1]];

      let validPair = false;
      for (rule of rulesArr) {
        if (rule[0] === updatePair[0] && rule[1] === updatePair[1]) {
          validPair = true;
          break;
        }
      }
      if (!validPair) {
        updateCorrect = false;
        break;
      }
    }
    if (updateCorrect) correctUpdateArr.push(update);
  }

  return correctUpdateArr.map((el) => el[Math.floor(el.length / 2)]).reduce((sum, el) => sum + el, 0);
}

const result1 = solve1("./day5/text.txt");
// console.log(result1);

//------------------------------ Part 2 ---------------------------------------------//

function solve2(file) {
  const data = fs.readFileSync(file, "utf-8");
  const arr = data
    .split("\n")
    .map((el) => el.replace("\r", ""))
    .filter((el) => el.trim() !== "");

  const rulesArr = [];
  const updateArr = [];
  const incorrectUpdateArr = [];

  arr.forEach((el) => {
    if (el.length === 5) {
      rulesArr.push(el.split("|").map(Number));
    } else {
      updateArr.push(el.split(",").map(Number));
    }
  });

  for (let update of updateArr) {
    let updateCorrect = true;

    for (let i = 0; i < update.length - 1; i++) {
      let updatePair = [update[i], update[i + 1]];

      let validPair = false;
      for (rule of rulesArr) {
        if (rule[0] === updatePair[0] && rule[1] === updatePair[1]) {
          validPair = true;
          break;
        }
      }
      if (!validPair) {
        updateCorrect = false;
        break;
      }
    }

    if (!updateCorrect) {
      incorrectUpdateArr.push(update);
    }
  }

  function sortUpdate(update, rulesArr) {
    return update.sort((a, b) => {
      for (let rule of rulesArr) {
        if (rule[0] === a && rule[1] === b) return -1;
        if (rule[0] === b && rule[1] === a) return 1;
      }
      return 0;
    });
  }

  const sortedUpdates = incorrectUpdateArr.map((update) => sortUpdate(update, rulesArr));
  return sortedUpdates.map((el) => el[Math.floor(el.length / 2)]).reduce((sum, el) => sum + el, 0);
}

const result2 = solve2("./day5/text.txt");
// console.log(result2);
