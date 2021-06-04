/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const simbolos = ["♦", "♥", "♠", "♣"];

function RandomColor(sim) {
  var aux = "";
  if (sim == "♦" || sim == "♥") {
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
  document.querySelector(".numero").innerHTML = Randomnum();
  var num = (document.querySelector(".simbolo").innerHTML = Randomcard(
    simbolos
  ));
  var aux = document.querySelector(".simbolo").textContent;
  document.querySelector(".simbolo1").innerHTML = aux;
  var color = (document.querySelector(".simbolo").style.color = RandomColor(
    num
  ));
  document.querySelector(".simbolo1").style.color = color;
};

document.querySelector("#button").addEventListener("click", function() {
  document.querySelector(".numero").innerHTML = Randomnum();
  var num = (document.querySelector(".simbolo").innerHTML = Randomcard(
    simbolos
  ));
  var aux = document.querySelector(".simbolo").textContent;
  document.querySelector(".simbolo1").innerHTML = aux;
  var color = (document.querySelector(".simbolo").style.color = RandomColor(
    num
  ));
  document.querySelector(".simbolo1").style.color = color;
});
var time = 10000;
setInterval(function() {
  document.querySelector(".numero").innerHTML = Randomnum();
  var num = (document.querySelector(".simbolo").innerHTML = Randomcard(
    simbolos
  ));
  var aux = document.querySelector(".simbolo").textContent;
  document.querySelector(".simbolo1").innerHTML = aux;
  var color = (document.querySelector(".simbolo").style.color = RandomColor(
    num
  ));
  document.querySelector(".simbolo1").style.color = color;
}, time);

document.querySelector("#width").addEventListener("click", function() {
  var h = document.querySelector("#inputw").value;
  document.querySelector(".card").style.width = h + "px";
});

document.querySelector("#heigth").addEventListener("click", function() {
  var w = document.querySelector("#inputh").value;
  document.querySelector(".card").style.height = w + "px";
});
