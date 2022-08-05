
//var listOfCharacters=[];

function displayNumber(value) {
  document.getElementById("display").value += value;
  //listOfCharacters.push(value);
}

function operation(){
  let result = document.getElementById("display").value;
  r = eval(result);
  document.getElementById("display").value=r;
}

// var number = document.getElementById("number");
// var operator = document.getElementById("sign");
//var equal = document.getElementById("equal");


// listOfCharacters.forEach(function (equal) {
//   equal.addEventListener("click", function () {
//     p = document.getElementById("number").number;
//   });
// });




