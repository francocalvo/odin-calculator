export function updateDisplay(equation_str, result_str) {
  const equation = document.querySelector(".equation");
  const result = document.querySelector(".result");
  equation.innerText = equation_str;
  result.innerText = result_str;
}
