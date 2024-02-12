import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWhetherInfo = async () => {
    try {
      let response = await fetch(
        `${URL}?q=${city}&appid=${API_Key}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description.toLowerCase(),
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let onhandleForm = (event) => {
    setCity(event.target.value);
  };
  let onSubmitForm = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWhetherInfo();
      updateInfo(info);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <h1 style={{ color: "white" }}>Search for Wheather</h1>
      <form onSubmit={onSubmitForm}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={onhandleForm}
          required
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Search
        </Button>
        <br></br>
        <br></br>
        {error && (
          <b>
            <p style={{ color: "Red" }}>No Such Place Exist</p>
          </b>
        )}
      </form>
    </div>
  );
}
