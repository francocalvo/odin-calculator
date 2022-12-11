import { SYMBOLS } from "./config.js";

export class Calculator {
  constructor() {
    this.ans = "";
    this.op1 = "";
    this.op2 = "";
    this.operator = "";
    this.operator_symbol = "";
    this.op1_s = false; // records if thje operand is settled
    this.operator_s = false;
    this.string = "";
  }

  setOperand(num) {
    if (!this.op1_s) this.op1 += num;
    else {
      this.op2 += num;
      this.operator_s = true;
    }
    return;
  }

  setOperator(operator) {
    this.op1_s = true;
    if (operator === "operate") this.operate();
    else {
      this.operator = operator;
      this.operator_symbol = SYMBOLS[operator];
    }
  }

  getString() {
    return this.string;
  }

  getResult() {
    return this.ans + "";
  }

  updateString() {
    this.string = [this.op1, this.operator_symbol, this.op2].join(" ");
  }

  clear() {
    this.ans = "";
    this.op1 = "";
    this.op2 = "";
    this.op1_s = false;
    this.op2_s = false;
    this.operator = "";
    this.string = "";
    this.operator_symbol = "";
  }

  delete() {
    if (!this.op1_s) {
      this.op1 = this.op1.slice(0, -1);
    } else if (!this.operator_s) {
      this.op1_s = false;
      this.operator = "";
    } else if (this.op2 === "") {
      this.operator_s = false;
      this.operator = "";
      this.operator_symbol = "";
    } else {
      this.op2 = this.op2.slice(0, -1);
    }
  }

  callFunction(fnc) {
    if (fnc === "clr") this.clear();
    else if (fnc === "del") {
      this.delete();
    }
  }

  operate() {
    const op1 = parseFloat(this.op1);
    const op2 = parseFloat(this.op2);
    console.log(this.operator);
    if (this.operator === "add") this.ans = this.add(op1, op2);
    else if (this.operator === "substract") this.ans = this.substract(op1, op2);
    else if (this.operator === "multiply") this.ans = this.multiply(op1, op2);
    else if (this.operator === "divide") this.ans = this.divide(op1, op2);
    else if (this.operator === "power") this.ans = this.divide(op1, op2);
    else if (this.operator === "percentage") this.ans = this.divide(op1, op2);
    else alert("ERROR: Invalid transaction");
    this.op1 = this.ans + "";
    this.op2 = "";
    this.operator_s = false;
  }

  add(op1, op2) {
    this.ans = op1 + op2;
    return this.ans;
  }

  substract(op1, op2) {
    this.ans = op1 - op2;
    return this.ans;
  }

  multiply(op1, op2) {
    this.ans = op1 * op2;
    return this.ans;
  }

  divide(op1, op2) {
    this.ans = op1 / op2;
    return this.ans;
  }

  power(op1, op2) {
    this.ans = Math.pow(op1, op2);
    return this.ans;
  }

  percentage(op1, op2) {
    this.ans = (op2 * op1) / 100;
    return this.ans;
  }
}
