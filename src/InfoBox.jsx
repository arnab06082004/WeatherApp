import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
import "./InfoBox.css";
const HOT_URL =
  "https://images.unsplash.com/photo-1717361281385-c915cc0fe9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VubnklMjBza3l8ZW58MHx8MHx8fDA%3D";
const COLD_URL =
  "https://images.unsplash.com/photo-1459695452562-46cc57bef5f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";

const RAIN_URL =
  "https://images.unsplash.com/photo-1556485689-33e55ab56127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJhaW58ZW58MHx8MHx8fDA%3D";

export default function InfoBox({ Info }) {
  return (
    <div className="InfoBox">
      <div className="Container">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                Info.humidity > 80
                  ? RAIN_URL
                  : Info.temp > 23
                  ? HOT_URL
                  : COLD_URL
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Info.city} {"  "}
                {Info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : Info.temp > 23 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <div>Temperature = {Info.temp}</div>
                <div>Max Temperature = {Info.maxTemp}</div>
                <div>Min Temperature = {Info.minTemp}</div>
                <div>Humidity = {Info.humidity}</div>
                <p>
                  The weather can be described as {Info.description} and feels
                  like {Info.feelsLike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
