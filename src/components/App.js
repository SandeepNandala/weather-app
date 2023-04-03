import { useEffect, useState } from "react";
import Day from "./Day";
import CurrentDay from "./CurrentDay";
import { APIkey } from "../APIkeys";
import { toast } from "react-hot-toast";

function App() {
  // default city is london
  const [city, setCity] = useState("London");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  // country of the default city
  const [country, setCountry] = useState("UK");
  const [loading, setLoading] = useState(true);
  const [celcius, setCelcius] = useState(true);

  // method to fetch the weather data from the API
  const fetchWeatherData = async (city,APIkey) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${city}&days=5&aqi=no&alerts=no`,
        {
          "content-type": "application/json",
        }
      );
      // converting the response data to json format
      const weatherData = await response.json();
      // storing 5days forecast 
      setForecast(weatherData.forecast.forecastday);
      // city name
      setCity(weatherData.location.name);
      // storing the current weather info
      setCurrentWeather(weatherData.current);
      // current city country 
      setCountry(weatherData.location.country);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("we didn't find any city");
      setLoading(false);
    }
  };

  // useEffect method to call fetch API method 
  useEffect(() => {
    // calling the fetchWeatherData method with city and APIKey
    fetchWeatherData(city, APIkey);
  }, [city]);

  // method to search the city 
  const searchCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.target.value);
      document.getElementById("search-bar").value = "";
      setLoading(true);
    }
  };
  // displaying the loading symbol until the data fetches from the API 
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "20rem" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden align-self-baseline">
            Loading...
          </span>
        </div>
      </div>
    );
  }
  // once the data is retrieved from the API displaying the weather info
  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <div className="input-group m-3 w-25">
          <input
            type="text"
            id="search-bar"
            className="form-control shadow-none"
            placeholder="Enter City.."
            onKeyDown={searchCity}
          />
        </div>
        {/* button to convert the units from Celsius to Fahrenheit vice-versa */}
        <button
          type="button"
          onClick={() => {
            setCelcius(celcius ? false : true);
          }}
          className="btn btn-primary m-3"
        >
          {celcius ? "°F" : "°C"}
        </button>
      </div>
      <h1 className="text-center m-3">
        {city}, {country}
      </h1>
      <div className="d-flex justify-content-center  text-center">
        {/* displaying th current weather info */}
        {currentWeather && (
          <CurrentDay celcius={celcius} weather={currentWeather} />
        )}
      </div>
      <h1 className="text-center m-3">5-Day Forecast</h1>
      <div className="d-flex justify-content-around flex-wrap m-3">
        {/* displaying the 5-day forecast info */}
        {forecast &&
          forecast.map((data) => (
            <Day
              key={`weather-${data.date_epoch}`}
              celcius={celcius}
              weather={data}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
