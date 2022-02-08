window.onload = () => {
  let suits = ["diams", "hearts", "clubs", "spades"];
  let ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let objOfCards = [];
  //Boton que genera cartas aleatorias
  let buttonDraw = document.querySelector(".draw-button");
  buttonDraw.addEventListener("click", myFunctionCards);

  function myFunctionCards() {
    objOfCards = [];
    let myCard = document.querySelector(".container");
    if (myCard.childNodes.length !== 0) {
      myCard.innerHTML = "";
    }
    let inputValueCards = parseInt(
      document.getElementById("numberusercards").value
    ); //estoy llamando y convirtiendo el valor del input que coloca el usuario en numero
    if (inputValueCards === 0) {
      alert("Coloca un numero mayor a 0");
    } else if (inputValueCards !== 0) {
      for (let i = 0; i < inputValueCards; i++) {
        let objElementsCard = {
          suits: suits[Math.floor(Math.random() * suits.length)],
          ranks: ranks[Math.floor(Math.random() * ranks.length)]
        };
        // objOfCards = objOfCards.concat(objElementsCard);
        objOfCards.push(objElementsCard);
      }

      if (myCard.childNodes.length === 0) {
        for (let element of objOfCards) {
          if (element.ranks === 1) {
            element.ranks = "A";
          }
          if (element.ranks === 11) {
            element.ranks = "J";
          }
          if (element.ranks === 12) {
            element.ranks = "Q";
          }
          if (element.ranks === 13) {
            element.ranks = "K";
          }
          let myDiv = document.createElement("div");
          let contentDiv = document.createTextNode(`${element.ranks}`);
          myDiv.className = `card ${element.suits}`;
          myDiv.appendChild(contentDiv);
          myCard.appendChild(myDiv);
        }
      }
    }
  }

  //Algoritmo de ordenamiento de Burbuja
  const bubbleSort = () => {
    let myUl = document.querySelector(".lista-containers-cards-sort");
    if (myUl.childNodes.length !== 0) {
      myUl.innerHTML = "";
    }
    let wall = objOfCards.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (objOfCards[index].ranks === "A") {
          objOfCards[index].ranks = 1;
        }
        if (objOfCards[index].ranks === "J") {
          objOfCards[index].ranks = 11;
        }
        if (objOfCards[index].ranks === "Q") {
          objOfCards[index].ranks = 12;
        }
        if (objOfCards[index].ranks === "K") {
          objOfCards[index].ranks = 13;
        }
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (objOfCards[index].ranks > objOfCards[index + 1].ranks) {
          let aux = objOfCards[index].ranks;
          objOfCards[index].ranks = objOfCards[index + 1].ranks;
          objOfCards[index + 1].ranks = aux;
        }
        index++;
      }
      wall--; //decrease the wall for optimization
    }
    for (let element of objOfCards) {
      if (element.ranks === 1) {
        element.ranks = "A";
      }
      if (element.ranks === 11) {
        element.ranks = "J";
      }
      if (element.ranks === 12) {
        element.ranks = "Q";
      }
      if (element.ranks === 13) {
        element.ranks = "K";
      }
      let myLi = document.createElement("li");
      let contentLi = document.createTextNode(`${element.ranks}`);
      myLi.className = `card ${element.suits}`;
      myLi.appendChild(contentLi);
      myUl.appendChild(myLi);
    }
    return objOfCards;
  };
  //Boton de Ordenamiento
  let sortButton = document.querySelector(".sort-button");
  sortButton.addEventListener("click", bubbleSort);
};
