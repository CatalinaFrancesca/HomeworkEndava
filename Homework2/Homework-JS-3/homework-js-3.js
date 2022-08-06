const multiDimensionaArray = [
  ["A", 2, 3],
  ["B", "A", 4],
  ["C", 5, "D"],
  ["A", "C", "E", ["A", 1, ["B", 2]]],
];

function countLetters(multiDimensionaArray) {
  var count = {};
  for (let item = 0; item < item.length; item++) {
    if (isLetter(multiDimensionaArray[item])) {
      if (count[multiDimensionaArray[item]]) {
        return count[multiDimensionaArray[item]]++;
      } else {
        return (count[multiDimensionaArray[item]] = 1);
      }
    }
    console.log(count[multiDimensionaArray[item]]);
  }
}

countLetters(multiDimensionaArray);

function isLetter(multiDimensionaArray) {
  for (item of multiDimensionaArray) {
    if (item >= "a" && item <= "z") {
      return true;
    } else if (item >= "A" && item <= "Z") {
      return true;
    }
    return false;
  }
}

// array=['A','B',['D',['A','B'],3],Map,{"test":'test',"prop":1}];
// array.forEach(element => {
//     console.log(typeof(element))
// });
