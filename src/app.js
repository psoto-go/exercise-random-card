/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const simbolos = ["♦", "♥", "♠", "♣"];

function RandomColor() {
  var aux = Math.floor(Math.random() * 2) + 1;
  if (aux == 1) {
    aux = "red";
  } else aux = "black";
  return aux;
}

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
  var color = (document.querySelector(".simbolo").style.color = RandomColor());
  document.querySelector(".simbolo1").style.color = color;
  document.querySelector(".numero").innerHTML = Randomnum();
  document.querySelector(".simbolo").innerHTML = Randomcard(simbolos);
  var aux = document.querySelector(".simbolo").textContent;
  document.querySelector(".simbolo1").innerHTML = aux;
};

document.getElementById("button").addEventListener("click", function() {
  var color = (document.querySelector(".simbolo").style.color = RandomColor());
  document.querySelector(".simbolo1").style.color = color;
  document.querySelector(".numero").innerHTML = Randomnum();
  document.querySelector(".simbolo").innerHTML = Randomcard(simbolos);
  var aux = document.querySelector(".simbolo").textContent;
  document.querySelector(".simbolo1").innerHTML = aux;
});
