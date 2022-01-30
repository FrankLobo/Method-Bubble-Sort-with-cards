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
let ButtonCard = document.querySelector(".button-card");
ButtonCard.addEventListener("click", () => {
  window.onload();
});
