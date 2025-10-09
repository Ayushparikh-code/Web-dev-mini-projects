/**
 * Enhanced Password Generator Script
 * Generates secure passwords with customizable options
 */

// DOM Element References
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const clipboardButton = document.getElementById('clipboard');

// Character generation functions mapped to their types
const characterGenerators = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

/**
 * Initialize the application
 */
function initializeApp() {
    // Add event listeners
    clipboardButton.addEventListener('click', copyToClipboard);
    generateButton.addEventListener('click', handleGeneratePassword);
    lengthElement.addEventListener('input', validateLength);
    
    // Generate initial password
    handleGeneratePassword();
}

/**
 * Validate password length input
 */
function validateLength() {
    const length = parseInt(lengthElement.value);
    const min = parseInt(lengthElement.min);
    const max = parseInt(lengthElement.max);
    
    if (length < min) lengthElement.value = min;
    if (length > max) lengthElement.value = max;
}

/**
 * Copy password to clipboard with modern Clipboard API
 */
async function copyToClipboard() {
    const password = resultElement.textContent;
    
    // Validate password exists
    if (!password || password === 'Click generate to create password') {
        showNotification('Please generate a password first!', 'warning');
        return;
    }
    
    try {
        // Try modern Clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(password);
            showNotification('Password copied to clipboard!', 'success');
            
            // Visual feedback on copy button
            const originalIcon = clipboardButton.innerHTML;
            clipboardButton.innerHTML = '<i class="fas fa-check"></i>';
            clipboardButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            setTimeout(() => {
                clipboardButton.innerHTML = originalIcon;
                clipboardButton.style.background = '';
            }, 2000);
        } else {
            // Fallback for older browsers
            copyToClipboardFallback(password);
        }
    } catch (error) {
        console.error('Copy failed:', error);
        copyToClipboardFallback(password);
    }
}

/**
 * Fallback clipboard copy method for older browsers
 * @param {string} text - Text to copy
 */
function copyToClipboardFallback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Password copied to clipboard!', 'success');
    } catch (error) {
        console.error('Fallback copy failed:', error);
        showNotification('Failed to copy password', 'error');
    } finally {
        textarea.remove();
    }
}

/**
 * Show notification message to user
 * @param {string} message - Message to display
 * @param {string} type - Notification type (success, error, warning)
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 
                       type === 'error' ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' : 
                       'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Handle password generation
 */
function handleGeneratePassword() {
    const length = parseInt(lengthElement.value);
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;
    
    // Validate at least one option is selected
    if (!hasLower && !hasUpper && !hasNumber && !hasSymbol) {
        showNotification('Please select at least one character type!', 'warning');
        resultElement.textContent = 'Select at least one option';
        return;
    }
    
    // Generate password
    const password = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    resultElement.textContent = password;
    
    // Add animation to result
    resultElement.style.animation = 'none';
    setTimeout(() => {
        resultElement.style.animation = 'fadeIn 0.5s ease-out';
    }, 10);
}

/**
 * Generate secure password based on selected criteria
 * @param {boolean} lower - Include lowercase letters
 * @param {boolean} upper - Include uppercase letters
 * @param {boolean} number - Include numbers
 * @param {boolean} symbol - Include symbols
 * @param {number} length - Password length
 * @returns {string} Generated password
 */
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    
    // Create array of selected types
    const typesArray = [
        { lower },
        { upper },
        { number },
        { symbol }
    ].filter(item => Object.values(item)[0]);
    
    // Return empty if no types selected
    if (typesCount === 0) {
        return '';
    }
    
    // Generate password by cycling through selected types
    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += characterGenerators[funcName]();
        });
    }
    
    // Shuffle the password for better randomness
    const finalPassword = shuffleString(generatedPassword.slice(0, length));
    
    return finalPassword;
}

/**
 * Shuffle string characters for better randomness
 * @param {string} str - String to shuffle
 * @returns {string} Shuffled string
 */
function shuffleString(str) {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

/**
 * Generate random lowercase letter
 * @returns {string} Random lowercase letter
 */
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

/**
 * Generate random uppercase letter
 * @returns {string} Random uppercase letter
 */
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/**
 * Generate random number
 * @returns {string} Random number (0-9)
 */
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/**
 * Generate random symbol
 * @returns {string} Random symbol
 */
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
