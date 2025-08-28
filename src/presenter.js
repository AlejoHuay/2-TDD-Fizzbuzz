import { generarCadenaFizzBuzz } from "./fizzbuzz";

const first = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + generarCadenaFizzBuzz(firstNumber) + "</p>";
});
