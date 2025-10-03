import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0a381ce21f5cce06e3045efd3c4e08c4";

    let getWeatherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            // Check if the API returned an error
            if (jsonResponse.cod === "404") {
                throw new Error("City not found");
            }
            
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            
            // Reset error state at the beginning of a new search
            // This ensures error messages don't persist when searching for a valid city after an error
            setError(false);
            
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch(err) {
            console.error("Error fetching weather:", err);
            setError(true);
            // Clear any previous weather info when there's an error
            updateInfo(null);
        }
    };
    
    return (
        <div className='SearchBox'> 
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city}
                onChange={handleChange} />
                <Button variant='contained' type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}