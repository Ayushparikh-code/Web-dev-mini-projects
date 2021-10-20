let height, firOpt, secOpt;

//Gets the height input and places the value of it in the blue box
document.getElementById('heightInput').addEventListener('input', getHeightInput);

function getHeightInput(e) {
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('resetButton').style.visibility = 'visible';
    height = e.target.value;
    document.getElementById('heightOutput').innerHTML = height; //placing the value to the DOM
    heightConverter();
}

document.getElementById('firOpt').addEventListener('change', getfirOpt);

function getfirOpt(e) {
    firOpt = e.target.value; //Gets placeholder value
    document.getElementById('heightInput').placeholder = 'Enter ' + firOpt + '...';
    document.getElementById('heightName').innerHTML = firOpt + ":";
    heightConverter();
}

document.getElementById('secOpt').addEventListener('change', getsecOpt);

function getsecOpt(e) {
    secOpt = e.target.value;
    document.getElementById('convertedHeightName').innerHTML = secOpt + ":";
    heightConverter();
}

function heightConverter() {
    const finalOutput = document.querySelector('#finalOutput');
    //Validates for Miles
    if (firOpt == "Miles" && secOpt == "Centimeters") {
        finalOutput.innerHTML = height * 160934;
    } else if (firOpt == "Miles" && secOpt == "Kilometers") {
        finalOutput.innerHTML = height * 1.60934;
    } else if (firOpt == "Miles" && secOpt == "Meters") {
        finalOutput.innerHTML = height * 1609.34;
    } else if (firOpt == "Miles" && secOpt == "Inches") {
        finalOutput.innerHTML = height * 63360;
    }
    //Validates for Centimeters
    else if (firOpt == "Centimeters" && secOpt == "Miles") {
        finalOutput.innerHTML = height / 160934;
    } else if (firOpt == "Centimeters" && secOpt == "Kilometers") {
        finalOutput.innerHTML = height / 100000;
    } else if (firOpt == "Centimeters" && secOpt == "Meters") {
        finalOutput.innerHTML = height * 0.01;
    } else if (firOpt == "Centimeters" && secOpt == "Inches") {
        finalOutput.innerHTML = height * 0.3937;
    }
    //Validates for Kilometers
    else if (firOpt == "Kilometers" && secOpt == "Centimeters") {
        finalOutput.innerHTML = height * 100000;
    } else if (firOpt == "Kilometers" && secOpt == "Miles") {
        finalOutput.innerHTML = height / 1.609;
    } else if (firOpt == "Kilometers" && secOpt == "Meters") {
        finalOutput.innerHTML = height * 1000;
    } else if (firOpt == "Kilometers" && secOpt == "Inches") {
        finalOutput.innerHTML = height * 39370;
    }
    //Validates for Meters
    else if (firOpt == "Meters" && secOpt == "Miles") {
        finalOutput.innerHTML = height / 1609;
    } else if (firOpt == "Meters" && secOpt == "Kilometers") {
        finalOutput.innerHTML = height / 1000;
    } else if (firOpt == "Meters" && secOpt == "Centimeters") {
        finalOutput.innerHTML = height * 100;
    } else if (firOpt == "Meters" && secOpt == "Inches") {
        finalOutput.innerHTML = height * 39.37;
    }

    //Validates for Inches
    else if (firOpt == "Inches" && secOpt == "Miles") {
        finalOutput.innerHTML = height / 63360;
    } else if (firOpt == "Inches" && secOpt == "Kilometers") {
        finalOutput.innerHTML = height / 39370;
    } else if (firOpt == "Inches" && secOpt == "Meters") {
        finalOutput.innerHTML = height / 39.37;
    } else if (firOpt == "Inches" && secOpt == "Centimeters") {
        finalOutput.innerHTML = height * 2.54;
    }
    //Validates if first option is the same as second option
    else {
        finalOutput.innerHTML = height;
    }
}

document.getElementById('resetButton').addEventListener('click', reset);

function reset() {
    document.getElementById('mainForm').reset();
    document.getElementById('output').style.visibility = 'hidden';
    document.getElementById('resetButton').style.visibility = 'hidden';
}
