import Card from "@mui/material/Card";
import "./InfoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  // Make sure info exists and has the expected properties
  if (!info) {
    return null; // Or a loading state
  }
  
  const INIT_URL = "https://media.istockphoto.com/id/485066698/photo/wind-erosion-lonely-tree.webp?a=1&b=1&s=612x612&w=0&k=20&c=BLUO0LR2ThrL5sX19hDMqXh2zz3b6achL5nowpx9lNk=";
  const Hot_url = "https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const Cold_url = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const Rain_url = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
  
  let imageURL = INIT_URL;
  if (info) {
    imageURL = info.humidity > 80 ? Rain_url : info.temp > 15 ? Hot_url : Cold_url;
  }
  
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia 
            sx={{ height: 140 }} 
            image={imageURL}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b style={{fontSize:"20px"}} > {info.city}</b>
              {info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                  ? <WbSunnyIcon />
                  : <SevereColdIcon />
              }
            </Typography>
            
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature = {info.temp} &deg;C
            </Typography>
            <br></br>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Humidity = {info.humidity}
            </Typography>
            <br></br>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Min Temp = {info.tempMin}&deg;C
            </Typography>
            <br></br>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Max Temp = {info.tempMax}&deg;C
            </Typography>
            <br></br>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              The weather can be described as <b>{info.weather}</b> and feels like <b>{info.feelsLike}</b>&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
