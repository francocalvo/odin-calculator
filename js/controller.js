"use strict";
import { Calculator } from "./model.js";
import * as view from "./view.js";
import { NUMBERS, OPERATORS, FUNCTIONS } from "./config.js";

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const calc = new Calculator();

calc.getString();

function handleInput(char) {
  if (NUMBERS.includes(char)) {
    calc.setOperand(char);
  } else if (OPERATORS.includes(char)) {
    calc.setOperator(char);
  } else if (FUNCTIONS.includes(char)) {
    calc.callFunction(char);
  }
  if (char !== "operate") calc.updateString();
  view.updateDisplay(calc.getString(), calc.getResult());
}

function handleClick(e) {
  e.preventDefault();
  const btn = e.target;
  const char = btn.dataset.char;
  handleInput(char);
}

function setupButtons(buttons) {
  buttons.forEach(btn => {
    btn.addEventListener("click", handleClick);
  });
}

function setupDisplay(display) {
  const children = Array.from(display.children);
  children.forEach(item => (item.innerText = ""));
}

function setup(buttons, display) {
  setupButtons(buttons);
  setupDisplay(display);
}

setup(buttons, display);
