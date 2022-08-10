function countElementsByLevel(document) {

    let div = document.getElementById("divId");
    let listOfChildren = div.children;
    for(i = 0; i<listOfChildren.length;i++){
        console.log(listOfChildren[i]);
    }
  }
  
  countElementsByLevel(document);
  