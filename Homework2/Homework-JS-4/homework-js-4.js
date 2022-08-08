function countElementsInDocument(document) {
  let div = document.getElementById("divId");
  let list = div.querySelectorAll("span");
  let elementNumber = 0;
  if (elementNumber) {
    elementNumber +=
      document.getElementById("elementName").innerHTML + list.length;
  } else {
    elementNumber =
      document.getElementById("elementName").innerHTML + list.length;
  }
  //document.getElementById("elementNumber").innerHTML=list.length;
  //document.getElementById("elementNumber").innerHTML=list.childElementCount;
  //console.log(list.getAttribute("p"));
  console.log(elementNumber);
}
countElementsInDocument(document);
