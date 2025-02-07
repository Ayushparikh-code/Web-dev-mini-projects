let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
let historyList = document.getElementById('history-list');
let currentInput = '';  // For storing the current expression
let history = [];       // To store calculation history

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        switch (buttonText) {
            case 'Clear':
                display.innerText = '';
                currentInput = '';
                break;
            case '=':
                try {
                    if (currentInput.includes('/0')) {
                        throw new Error("Cannot divide by zero");
                    }
                    let result = eval(currentInput);
                    display.innerText = result;
                    // Add to history
                    history.push(`${currentInput} = ${result}`);
                    updateHistory();
                    currentInput = result.toString(); // Allow further operations on result
                } catch (error) {
                    display.innerText = "Error";
                    currentInput = '';
                }
                break;
            case 'Del':
                if (currentInput) {
                    currentInput = currentInput.slice(0, -1);
                    display.innerText = currentInput;
                }
                break;
            default:
                // Prevent multiple operators in a row
                if (isOperator(buttonText) && isOperator(currentInput.slice(-1))) {
                    return;
                }
                currentInput += buttonText;
                display.innerText = currentInput;
        }
    });
});

// Utility function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Function to update the history
function updateHistory() {
    historyList.innerHTML = history.map(entry => `<li>${entry}</li>`).join('');
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[\d\/\*\-\+\.]/.test(key)) {
        // If key is a number or operator
        if (isOperator(key) && isOperator(currentInput.slice(-1))) {
            return;  // Prevent multiple operators
        }
        currentInput += key;
        display.innerText = currentInput;
    } else if (key === 'Enter') {
        document.querySelector('button:contains("=")').click();
    } else if (key === 'Backspace') {
        document.querySelector('button:contains("Del")').click();
    } else if (key === 'Escape') {
        document.querySelector('button:contains("Clear")').click();
    }
});
