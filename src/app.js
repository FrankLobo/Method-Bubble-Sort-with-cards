window.onload = () => {
  let generateRandomSuitCard = () => {
    let cardSuits = ["diams", "hearts", "clubs", "spades"];
    let indexCardSuits = Math.floor(Math.random() * cardSuits.length);
    return cardSuits[indexCardSuits];
  };
  let generateRandomNumberCard = () => {
    let cardNumbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexCardNumbers = Math.floor(Math.random() * cardNumbers.length);
    return cardNumbers[indexCardNumbers];
  };
  document.querySelector(
    ".card"
  ).className = `card ${generateRandomSuitCard()}`;
  document.querySelector(".card").innerHTML = generateRandomNumberCard();
};

// function theInputRandomNumbers () {
//   let newArray = [];

// }

let drawButton = document.querySelector(".draw-button");
drawButton.addEventListener("click", e => {
  const input = e.target;
  // window.onload();
  let onlyNumbers = /^[0-9]+$/;
  // let repeatCards = window.onload();
  // let inputNumbers = document.getElementById("numberusercards");
  if (input.value === "" || onlyNumbers.test(input.value)) {
    window.onload();
  }
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
});

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
