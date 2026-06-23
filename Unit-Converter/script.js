const unitConfig = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    mile: 1609.34,
    foot: 0.3048
  },
  weight: {
    kilogram: 1,
    gram: 0.001,
    pound: 0.453592,
    ounce: 0.0283495
  }
};

const categoryEl = document.getElementById("category");
const fromValueEl = document.getElementById("fromValue");
const toValueEl = document.getElementById("toValue");
const fromUnitEl = document.getElementById("fromUnit");
const toUnitEl = document.getElementById("toUnit");
const swapBtn = document.getElementById("swapBtn");
const messageEl = document.getElementById("message");

function formatUnitName(unit) {
  return unit.charAt(0).toUpperCase() + unit.slice(1);
}

function populateUnitOptions() {
  const category = categoryEl.value;
  const units = Object.keys(unitConfig[category]);

  fromUnitEl.innerHTML = "";
  toUnitEl.innerHTML = "";

  units.forEach((unit, index) => {
    const fromOption = document.createElement("option");
    fromOption.value = unit;
    fromOption.textContent = formatUnitName(unit);
    fromUnitEl.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = unit;
    toOption.textContent = formatUnitName(unit);
    toUnitEl.appendChild(toOption);

    if (index === 1) {
      toUnitEl.value = unit;
    }
  });
}

function convertValue() {
  const rawValue = fromValueEl.value.trim();
  const inputValue = Number(rawValue);

  if (!rawValue) {
    toValueEl.value = "";
    messageEl.textContent = "";
    return;
  }

  if (Number.isNaN(inputValue)) {
    toValueEl.value = "";
    messageEl.textContent = "Please enter a valid number.";
    return;
  }

  const category = categoryEl.value;
  const fromUnit = fromUnitEl.value;
  const toUnit = toUnitEl.value;

  const valueInBaseUnit = inputValue * unitConfig[category][fromUnit];
  const converted = valueInBaseUnit / unitConfig[category][toUnit];

  toValueEl.value = converted.toFixed(6).replace(/\.?0+$/, "");
  messageEl.textContent = "";
}

function swapUnits() {
  const previousFromUnit = fromUnitEl.value;
  fromUnitEl.value = toUnitEl.value;
  toUnitEl.value = previousFromUnit;
  convertValue();
}

categoryEl.addEventListener("change", () => {
  populateUnitOptions();
  convertValue();
});

fromValueEl.addEventListener("input", convertValue);
fromUnitEl.addEventListener("change", convertValue);
toUnitEl.addEventListener("change", convertValue);
swapBtn.addEventListener("click", swapUnits);

populateUnitOptions();
