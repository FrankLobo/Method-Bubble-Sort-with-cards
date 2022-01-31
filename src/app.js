// window.onload = () => {

// mi funcion para generar numeros aleatorios en el input y cartas aleatorias
// function randomGeneration() {
//   let suits = ["diams", "hearts", "clubs", "spades"];
//   let ranks = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K"
//   ];

//   let cards = [];

//   for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
//     // suits[suitCounter] = Math.floor(Math.random() * suits.length);
//     for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
//       ranks[rankCounter] = Math.floor(Math.random() * ranks.length);
//       cards.push(ranks[rankCounter] + suits[suitCounter]);
//     }
//   }
// }
// document.querySelector(".card").classList.add(randomGeneration());
// document.querySelector(".card").innerHTML = generateRandomNumberCard();
let number = 0;
// mi boton Draw que escuchara el evento de mi funcion randomGeneration
let formValue = document.getElementById("formValue");
function myFunction(e) {
  e.preventDefault();
  number = e.target[0].valueAsNumber;
  console.log(number);
  for (let i = 0; i < number; i++) {
    let container = document.querySelector(".container");
    // let div = document.createElement("div");
    // div.classList.add("card");
    // container.appendChild(div);
    container.innerHTML += `<div class="card" id="showcards"></div>`;
    console.log("for", i);
  }
}
formValue.removeEventListener("submit", myFunction);
formValue.addEventListener("submit", myFunction);

//   if (document.querySelector("#numberusercards").value === "") {
//     document.querySelector(".card").style.display = "none";
//   }
//   if (document.querySelector("#numberusercards").value !== "") {
//     document.querySelector(".card").style.display = "flex";
//   }
// });
// let sortButton = document.querySelector(".sort-button");
//   sortButton.addEventListener('click', () => {

//     //codigo algoritmo de ordenamiento Bubble//
// // const bubbleSort = (arr) => {
// //   let wall = arr.length - 1; //we start the wall at the end of the array
// //   while (wall > 0){
// //       let index = 0;
// //       while (index < wall) {
// //         //compare the adjacent positions, if the right one is bigger, we have to swap
// //         if (arr[index] > arr[index + 1]) {
// //           let aux = arr[index];
// //           arr[index] = arr[index + 1];
// //           arr[index + 1] = aux;
// //         }
// //         index++;
// //       }
// //       wall--; //decrease the wall for optimization
// //   }
// // return arr;
// // };
//   })
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

console.log(matrixBuilder(5));
*/
