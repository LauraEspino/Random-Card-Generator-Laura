/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palos = ["♦", "♥", "♠", "♣"];
  const numCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomPalos = palos[Math.floor(Math.random() * palos.length)];

  if (randomPalos === "♦" || randomPalos === "♥") {
    let elemRandomPalos = document.querySelector(".palo");
    elemRandomPalos.style.color = "red";
    elemRandomPalos.innerHTML = randomPalos;

    let elemRandomPalosInf = document.querySelector(".paloInferior");
    elemRandomPalosInf.style.color = "red";
    elemRandomPalosInf.innerHTML = randomPalos;
  } else {
    let elemRandomPalos = document.querySelector(".palo");
    elemRandomPalos.innerHTML = randomPalos;

    let elemRandomPalosInf = document.querySelector(".paloInferior");
    elemRandomPalosInf.innerHTML = randomPalos;
  }

  let randomNumCartas = numCartas[Math.floor(Math.random() * numCartas.length)];
  let elemRandomNum = document.querySelector(".numero");
  elemRandomNum.innerHTML = randomNumCartas;
};
document.querySelector(".button").addEventListener("click", nuevaCarta);
function nuevaCarta() {
  const palos = ["♦", "♥", "♠", "♣"];
  const numCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomPalos = palos[Math.floor(Math.random() * palos.length)];

  if (randomPalos === "♦" || randomPalos === "♥") {
    let elemRandomPalos = document.querySelector(".palo");
    elemRandomPalos.style.color = "red";
    elemRandomPalos.innerHTML = randomPalos;

    let elemRandomPalosInf = document.querySelector(".paloInferior");
    elemRandomPalosInf.style.color = "red";
    elemRandomPalosInf.innerHTML = randomPalos;
  } else {
    let elemRandomPalos = document.querySelector(".palo");
    elemRandomPalos.innerHTML = randomPalos;

    let elemRandomPalosInf = document.querySelector(".paloInferior");
    elemRandomPalosInf.innerHTML = randomPalos;
  }

  let randomNumCartas = numCartas[Math.floor(Math.random() * numCartas.length)];
  let elemRandomNum = document.querySelector(".numero");
  elemRandomNum.innerHTML = randomNumCartas;
}
