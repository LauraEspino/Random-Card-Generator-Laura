/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generarRandomCard() {
    // Declaracion de arrays
    const palos = ["♦", "♥", "♠", "♣"];
    const numCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    // Valores Random
    let randomPalos = palos[Math.floor(Math.random() * palos.length)];
    let randomNumCartas =
      numCartas[Math.floor(Math.random() * numCartas.length)];

    // Obteniendo elementos de la carta
    let elemRandomPalos = document.querySelector(".palo");
    let elemRandomPalosInf = document.querySelector(".paloInferior");
    let elemRandomNum = document.querySelector(".numero");
    // Dibujo las cartas
    elemRandomPalos.innerHTML = randomPalos;
    elemRandomNum.innerHTML = randomNumCartas;
    elemRandomPalosInf.innerHTML = randomPalos;

    if (randomPalos === "♦" || randomPalos === "♥") {
      elemRandomPalos.style.color = "red";
      elemRandomPalosInf.style.color = "red";
    } else {
      elemRandomPalos.style.color = "black";
      elemRandomPalosInf.style.color = "black";
    }
  }
  generarRandomCard();
  document
    .querySelector(".button")
    .addEventListener("click", generarRandomCard);

  setInterval(function() {
    generarRandomCard();
  }, 10000);
};
