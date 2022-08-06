const multiDimensionaArray = [
  ["A", 2, 3],
  ["B", "A", 4],
  ["C", 5, "D"],
  ["A", "C", "E", ["A", 1, ["B", 2]]],
];

function countLetters(multiDimensionaArray) {
  var count = {};
  for (item of multiDimensionaArray.flat(4)) {
    if (count[item]) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }
    
  }
  console.log(count);
}

countLetters(multiDimensionaArray);
// if (typeof char !== "string") {
    //     return false;
    //   } else {
    //     return /^[a-zA-Z]+$/.test(count[item]);
    //   }