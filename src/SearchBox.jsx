import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = " https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b6301c518938c2dbda4ba23a25178b3f";
  
  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      console.log(jsonRes);
      let result = {
        city: city,
        humidity : jsonRes.main.humidity,
        temp: jsonRes.main.temp,
        maxTemp: jsonRes.main.temp_max,
        minTemp: jsonRes.main.temp_min,
        feelsLike: jsonRes.main.feels_like,
        description: jsonRes.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handelChange = (evt) => {
    setCity(evt.target.value);
  };
  let handelSubmit = async (evt) => {
  evt.preventDefault();
  setError(false); 
  try {
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  } catch (error) {
    setError(true);
  }
};

  return (
    <div className="SearchBox">
      <form action="" onSubmit={handelSubmit}>
        <h2>Search for weather</h2>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handelChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>no such place exist!</p>}
       
       
      </form>
    </div>
  );
}
