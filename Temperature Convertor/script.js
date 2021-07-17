let results = document.getElementById("converted-value");

// On change event for the second SELECT attribute
to.onchange = () => {
  results.innerHTML = "";
  results.style.color = "black";

  let from = document.getElementById("from");
  let to = document.getElementById("to");
  let input = parseInt(document.getElementById("input").value, 10);

  let fromValue = from.value;
  let toValue = to.value;

  // Checking if both are same
  if (fromValue === toValue) {
    results.style.color = "red";
    results.innerHTML = "CONVERSION UNITS SHOULD BE DIFFERENT!";
  }

  // Checking the input and passing it to appropriate functions
  if (fromValue === "celsius" && toValue === "kelvin") {
    celsiusToKelvin(input);
  }

  if (fromValue === "celsius" && toValue === "fahrenheit") {
    celsiusToFahrenheit(input);
  }

  if (fromValue === "fahrenheit" && toValue === "kelvin") {
    fahrenheitToKelvin(input);
  }

  if (fromValue === "fahrenheit" && toValue === "celsius") {
    fahrenheitToCelsius(input);
  }

  if (fromValue === "kelvin" && toValue === "fahrenheit") {
    KelvinToFahrenheit(input);
  }

  if (fromValue === "kelvin" && toValue === "celsius") {
    KelvinToCelsius(input);
  }
};

// Conversion of input values

const celsiusToKelvin = (input) => {
  results.innerHTML = `The final converted value is ${(input + 273.15).toFixed(
    2
  )}`;
};

const celsiusToFahrenheit = (input) => {
  results.innerHTML = `The final converted value is ${(
    input * (9 / 5) +
    32
  ).toFixed(2)}`;
};
const fahrenheitToKelvin = (input) => {
  results.innerHTML = `The final converted value is ${(
    (input + 459.67) *
    (5 / 9)
  ).toFixed(2)}`;
};

const fahrenheitToCelsius = (input) => {
  results.innerHTML = `The final converted value is ${(
    (input - 32) *
    (5 / 9)
  ).toFixed(2)}`;
};

const KelvinToFahrenheit = (input) => {
  results.innerHTML = `The final converted value is ${(
    input * 1.8 -
    459.67
  ).toFixed(2)}`;
};

const KelvinToCelsius = (input) => {
  results.innerHTML = `The final converted value is ${(input - 273.15).toFixed(
    2
  )}`;
};
