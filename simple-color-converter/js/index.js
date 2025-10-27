const MODES = {
    RGB_TO_HEX: 'RGB to HEX',
    HEX_TO_RGB: 'HEX to RGB'
};

let selectedMode = MODES.RGB_TO_HEX;

function modeChangeHandler(event) {
    const newMode = event.target.value;
    if (selectedMode === newMode) return;

    selectedMode = newMode;

    const inputContainer = document.querySelector('.input-container');
    const oldInputsContainer = inputContainer.querySelector('.mode-inputs-container');
    if (oldInputsContainer) {
        inputContainer.removeChild(oldInputsContainer);
    }

    renderModeInputs(inputContainer, selectedMode);
}

function renderModeDropdown(container) {
    const divElement = document.createElement('div');
    divElement.className = 'mode-dropdown-container';
    container.appendChild(divElement);

    const dropdownLabel = document.createElement('label');
    dropdownLabel.textContent = 'Select Conversion Mode: ';
    dropdownLabel.setAttribute('for', 'mode-dropdown');

    const modeDropdown = document.createElement('select');
    modeDropdown.className = 'mode-dropdown';
    modeDropdown.addEventListener('change', modeChangeHandler);

    Object.values(MODES).forEach(mode => {
        const option = document.createElement('option');
        option.value = mode;
        option.textContent = mode;
        if (mode === selectedMode) {
            option.selected = true;
        }
        modeDropdown.appendChild(option);
    });

    divElement.appendChild(dropdownLabel);
    divElement.appendChild(modeDropdown);
}

function renderModeInputs(container, mode) {
    const inputsContainer = document.createElement('div');
    inputsContainer.className = 'mode-inputs-container';
    container.appendChild(inputsContainer);

    if (mode === MODES.RGB_TO_HEX) {
        ['R', 'G', 'B'].forEach(label => {
            const input = document.createElement('input');
            input.type = 'number';
            input.placeholder = `${label} (0-255)`;
            input.min = 0;
            input.max = 255;
            input.style.width = '80px';
            inputsContainer.appendChild(input);
        });
    } else if (mode === MODES.HEX_TO_RGB) {
        const hexInput = document.createElement('input');
        hexInput.type = 'text';
        hexInput.placeholder = 'HEX (#RRGGBB)';
        inputsContainer.appendChild(hexInput);
    }
}

function renderConvertButton(inputContainer) {
    const convertButtonDiv = document.createElement('div');
    convertButtonDiv.className = 'convert-button-container';
    inputContainer.appendChild(convertButtonDiv);

    const convertButton = document.createElement('button');
    convertButton.textContent = 'Convert';
    convertButton.addEventListener('click', renderOutput);

    convertButtonDiv.appendChild(convertButton);
}

function getHexFromRGB(r, g, b) {
    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function getRGBFromHex(hex) {
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }
    if (hex.length !== 6) {
        return 'Invalid HEX format';
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `RGB(${r}, ${g}, ${b})`;
}

function getTextColor(selectedMode, inputs) {
    if (selectedMode === MODES.RGB_TO_HEX) {
        const r = parseInt(inputs[0].value) || 0;
        const g = parseInt(inputs[1].value) || 0;
        const b = parseInt(inputs[2].value) || 0;
        return (r + g + b > 382) ? 'black' : 'white';
    } else if (selectedMode === MODES.HEX_TO_RGB) {
        let hexValue = inputs[0].value;
        if (hexValue.startsWith('#')) {
            hexValue = hexValue.slice(1);
        }
        if (hexValue.length !== 6) {
            return 'black'; // default color for invalid HEX
        }
        return (parseInt(hexValue.slice(0, 2), 16) + parseInt(hexValue.slice(2, 4), 16) + parseInt(hexValue.slice(4, 6), 16) > 382) ? 'black' : 'white';
    }
    return 'black';
}

function getBgColor(selectedMode, inputs) {
    return selectedMode === MODES.RGB_TO_HEX
        ? `rgb(${inputs[0].value || 0}, ${inputs[1].value || 0}, ${inputs[2].value || 0})`
        : inputs[0].value || '#ffffff';
}

function renderOutput() {
    const outputContainer = document.querySelector('.output-container');
    outputContainer.style.marginTop = '20px';
    outputContainer.innerHTML = '';

    const inputContainer = document.querySelector('.input-container');
    const inputsContainer = inputContainer.querySelector('.mode-inputs-container');
    const inputs = inputsContainer.querySelectorAll('input');

    let outputText = '';

    if (selectedMode === MODES.RGB_TO_HEX) {
        outputText = getHexFromRGB(
            parseInt(inputs[0].value),
            parseInt(inputs[1].value),
            parseInt(inputs[2].value)
        );
    } else if (selectedMode === MODES.HEX_TO_RGB) {
        outputText = getRGBFromHex(inputs[0].value);
    }

    outputContainer.textContent = outputText;
    document.body.style.backgroundColor = getBgColor(selectedMode, inputs);

    // Set text color based on background brightness
    document.body.style.color = getTextColor(selectedMode, inputs);
}

function main() {
    const mainAppContainer = document.querySelector('.main-app-container');
    const inputContainer = mainAppContainer.querySelector('.input-container');

    renderModeDropdown(inputContainer);
    renderConvertButton(inputContainer);
    renderModeInputs(inputContainer, selectedMode);
}

document.addEventListener('DOMContentLoaded', main);
