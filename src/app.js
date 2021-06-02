/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const simbolos = ["♦", "♥", "♠", "♣"];

function Randomcard(simbolos) {
  return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function Randomnum(simbolos) {
  var sim = Math.floor(Math.random() * 12) + 2;
  if (sim === 11) {
    sim = "J";
  } else if (sim === 12) {
    sim = "Q";
  } else if (sim === 13) {
    sim = "K";
  }
  return sim;
}

window.onload = function refresh() {
  document.querySelector(".numero").innerHTML = Randomnum();
  let array1 = document.querySelectorAll(".simbolo");
  array1.forEach(element => (element.innerHTML = Randomcard(simbolos)));
};

document.getElementById("button").addEventListener("click", function() {
  document.querySelector(".numero").innerHTML = Randomnum();
  let array1 = document.querySelectorAll(".simbolo");
  array1.forEach(element => (element.innerHTML = Randomcard(simbolos)));
});
