let ramdomNumber1 = Math.floor(Math.random() * 6) + 1;
let ramdomNumber2 = Math.floor(Math.random() * 6) + 1;

let player1 = document.querySelectorAll("img")[0];
let player2 = document.querySelectorAll("img")[1];

let h1 = document.querySelector("h1");
if (ramdomNumber1 > ramdomNumber2) {
  h1.innerHTML = `Player 1 Wins`;
} else if (ramdomNumber1 == ramdomNumber2) {
  h1.innerHTML = "Draw!";
} else {
  h1.innerHTML = "Player 2 wins";
}
player1.src = `images/dice${ramdomNumber1}.png`;
player2.src = `images/dice${ramdomNumber2}.png`;
