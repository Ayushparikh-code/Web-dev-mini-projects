const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //changed

function ageCalc() {  
    let today = new Date();  
    let inputDate = new Date(document.getElementById("date").value);  
    
    // Check if the input date is valid  
    if (isNaN(inputDate.getTime()) || inputDate > today) {  
        alert("Enter a valid date of birth");  
        return;  
    }  
    
    let birthYear = inputDate.getFullYear();  
    let birthMonth = inputDate.getMonth();  
    let birthDate = inputDate.getDate();  

    let currentYear = today.getFullYear();  
    let currentMonth = today.getMonth();  
    let currentDay = today.getDate();  

    // Calculate age  
    let ageYears = currentYear - birthYear;  
    let ageMonths = currentMonth - birthMonth;  
    let ageDays = currentDay - birthDate;  

    // Adjust for negative month or day values  
    if (ageDays < 0) {  
        ageMonths--;  
        ageDays += daysInMonth(currentMonth - 1, currentYear);  
    }  
    if (ageMonths < 0) {  
        ageYears--;  
        ageMonths += 12;  
    }  

    display(ageDays, ageMonths, ageYears);  
}  

function display(bdate, bmonth, byear) {  
    document.getElementById("years").textContent = byear;  
    document.getElementById("months").textContent = bmonth;  
    document.getElementById("days").textContent = bdate;  
}  

function daysInMonth(month, year) {  
    // Adjust for February in leap years  
    if (month === 1) {  
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;  //changed leap year code for correct age calculating
    }  
    return months[month];  
}
