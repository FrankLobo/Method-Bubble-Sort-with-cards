// window.onload = () => {
let suits = ["diams", "hearts", "clubs", "spades"];
let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let objOfCards = [];

let buttonDraw = document.querySelector(".draw-button");
buttonDraw.addEventListener("click", myFunctionCards);

function myFunctionCards() {
  let objOfCards = [];
  let inputValueCards = parseInt(
    document.getElementById("numberusercards").value
  ); //estoy llamando al valor del input que coloca el usuario
  if (inputValueCards === 0) {
    alert("Coloca un numero mayor a 0");
  } else if (inputValueCards !== 0) {
    for (let i = 0; i < inputValueCards; i++) {
      let objElementsCard = {
        ranks: ranks[Math.floor(Math.random() * ranks.length)],
        suits: suits[Math.floor(Math.random() * suits.length)]
      };
      objOfCards.push(objElementsCard);
    }
  }
  for (let element of objOfCards) {
    console.log(element);
    let myCard = document.querySelector(".container");
    let myDiv = document.createElement("div");
    let contentDiv = document.createTextNode(`${element.ranks}`);
    myDiv.appendChild(contentDiv);
    myDiv.className = `card ${element.suits}`;
    myCard.appendChild(myDiv);
  }
}

// let inputValueCards = document.getElementById("numberusercards").value;
// if (inputValueCards === "") {
//   document.querySelector(".card").style.display = "none";
// } else if (inputValueCards !== "") {
//   document.querySelector(".card").style.display = "flex";
// }

// });
// let sortButton = document.querySelector(".sort-button");
// sortButton.addEventListener("click", myFunctionCards);
// codigo para crear una matriz//

/*function matrixBuilder(builder) {
  let newMatrix = [];
  let matrixRow = [];
  if (typeof builder === "number") {
    for (let i = 0; i < builder; i++) {
      newMatrix.push(matrixRow);
    }
    for (let i = 0; i < builder; i++) {
      matrixRow.push(Math.floor(Math.random() * 2));
    }
  }
  return newMatrix;
}


*/
