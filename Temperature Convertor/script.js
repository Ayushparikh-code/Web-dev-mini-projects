let done = document.getElementById('converted-value')

to.onchange = () => {
    done.innerHTML = ""
    let from = document.getElementById('from')
    let to = document.getElementById('to')

    let fromValue = from.value
    let toValue = to.value

    if(fromValue === toValue) {
        done.innerHTML = "Units should be different"
    }

    if(fromValue === 'celsius' && toValue === 'kelvin') {
        celsiusToKelvin(fromValue, toValue) 
    }

    if(fromValue === 'celsius' && toValue === 'fahrenheit') {
        celsiusToFahrenheit(fromValue, toValue) 
    }
    
    if(fromValue === 'fahrenheit' && toValue === 'kelvin') {
        fahrenheitToKelvin(fromValue, toValue) 
    }

    if(fromValue === 'fahrenheit' && toValue === 'celsius') {
        fahrenheitToCelsius(fromValue, toValue) 
    }
    
    if(fromValue === 'kelvin' && toValue === 'fahrenheit') {
        KelvinToFahrenheit(fromValue, toValue) 
    }

    if(fromValue === 'kelvin' && toValue === 'celsius') {
        KelvinToCelsius(fromValue, toValue) 
    }
}

const celsiusToKelvin = (fromValue, toValue) => {
    alert(`${fromValue}, ${toValue}`)
}

const celsiusToFahrenheit = (fromValue, toValue) => {
    alert(`${fromValue}, ${toValue}`)
}

const fahrenheitToKelvin = (fromValue, toValue) => {
    alert(`${fromValue}, ${toValue}`)
}

const fahrenheitToCelsius = (fromValue, toValue) => {
    alert(`${fromValue}, ${toValue}`)
}

const KelvinToFahrenheit = (fromValue, toValue) => {
    alert(`${fromValue}, ${toValue}`)
}

const KelvinToCelsius = (fromValue, toValue) => {
    alert(`${fromValue}, ${toValue}`)
}