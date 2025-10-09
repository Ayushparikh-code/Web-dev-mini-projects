/**
 * Enhanced Age Calculator Script
 * Calculates age in years, months, and days with improved error handling
 */

// DOM Element References
const currDateElement = document.getElementById('currDate');
const dateOfBirthInput = document.getElementById('DOB');
const calculateButton = document.getElementById('CalcAge');
const displayAgeSection = document.getElementById('displayAge');
const ageResultElement = document.getElementById('age');

// Get current date
const today = new Date();

/**
 * Initialize the application
 */
function initializeApp() {
    // Display current date with formatting
    displayCurrentDate();
    
    // Set max date to today (prevent future dates)
    setMaxDate();
    
    // Add event listeners
    calculateButton.addEventListener('click', calculateAge);
    dateOfBirthInput.addEventListener('keypress', handleEnterKey);
}

/**
 * Display formatted current date
 */
function displayCurrentDate() {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = today.toLocaleDateString('en-US', options);
    currDateElement.textContent = formattedDate;
}

/**
 * Set maximum date for date input (today)
 */
function setMaxDate() {
    const todayString = today.toISOString().split('T')[0];
    dateOfBirthInput.setAttribute('max', todayString);
}

/**
 * Handle Enter key press on date input
 */
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
}

/**
 * Calculate age based on date of birth
 */
function calculateAge() {
    // Validate input
    if (!dateOfBirthInput.value) {
        showError('Please select your date of birth');
        return;
    }
    
    const birthDate = new Date(dateOfBirthInput.value);
    
    // Validate date
    if (isNaN(birthDate.getTime())) {
        showError('Invalid date. Please select a valid date.');
        return;
    }
    
    // Check if birth date is in the future
    if (birthDate > today) {
        showError('Birth date cannot be in the future!');
        return;
    }
    
    // Calculate age components
    const ageDetails = calculateDetailedAge(birthDate);
    
    // Display results
    displayResults(ageDetails);
}

/**
 * Calculate detailed age (years, months, days)
 * @param {Date} birthDate - The birth date
 * @returns {Object} Object containing years, months, and days
 */
function calculateDetailedAge(birthDate) {
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    // Adjust for negative days
    if (days < 0) {
        months--;
        // Get days in previous month
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calculate total days lived
    const timeDiff = today - birthDate;
    const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    return { years, months, days, totalDays };
}

/**
 * Display age calculation results
 * @param {Object} ageDetails - Object containing age details
 */
function displayResults(ageDetails) {
    const { years, months, days, totalDays } = ageDetails;
    
    // Create result message
    let resultHTML = `
        <strong style="font-size: 1.5rem; display: block; margin-bottom: 15px;">
            ${years} ${years === 1 ? 'Year' : 'Years'}
        </strong>
    `;
    
    // Add months and days if not zero
    if (months > 0 || days > 0) {
        const parts = [];
        if (months > 0) parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`);
        if (days > 0) parts.push(`${days} ${days === 1 ? 'Day' : 'Days'}`);
        resultHTML += `<div style="margin-bottom: 10px;">${parts.join(', ')}</div>`;
    }
    
    // Add total days
    resultHTML += `<div style="font-size: 0.95rem; opacity: 0.9; margin-top: 10px;">That's ${totalDays.toLocaleString()} days!</div>`;
    
    // Check for birthday
    if (months === 0 && days === 0) {
        resultHTML += `<div style="font-size: 1.1rem; margin-top: 15px;">🎉 Happy Birthday! 🎂</div>`;
    }
    
    // Update DOM
    ageResultElement.innerHTML = resultHTML;
    displayAgeSection.style.display = 'block';
    
    // Smooth scroll to results
    setTimeout(() => {
        displayAgeSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    ageResultElement.innerHTML = `
        <div style="color: #fee; font-size: 1.1rem;">
            <i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>
            ${message}
        </div>
    `;
    displayAgeSection.style.display = 'block';
    
    // Hide error after 3 seconds
    setTimeout(() => {
        displayAgeSection.style.display = 'none';
    }, 3000);
}

// Initialize the app when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
