import { useState } from "react";
import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";
export default function WeatherApp() {
  const [weatherApp, setWeatherApp] = useState({
    city: "Ramtek",
    feelsLike: 27.12,
    humidity: 23,
    temp: 28.42,
    tempMax: 28.42,
    tempMin: 28.42,
    weather: "clear sky",
  });

  let updateInfo = (info) => {
    setWeatherApp(info);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox weather={weatherApp} />
    </div>
  );
}
