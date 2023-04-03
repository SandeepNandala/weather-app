import { useEffect, useState } from "react";
import Day from "./Day";
import CurrentDay from "./CurrentDay";

function App() {
  const [city, setCity] = useState("paris");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  let finalData=[];


  // const APIkey = "061d9e2eb69720daf4505bd0a670886d";
  // const units = "metric";
  // const url= `api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${APIkey}`
  // const url= `https://api.weatherapi.com/v1/forecast.json?key=2fb459fe9b484d87994162528230204&q=London&days=5&aqi=no&alerts=no`

  const fetchWeatherData = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2fb459fe9b484d87994162528230204&q=London&days=5&aqi=no&alerts=no`,
      {
        "content-type": "application/json",
      }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    // console.log(typeof weatherData);
    setForecast(weatherData.forecast.forecastday);
    setCity(weatherData.location.name);
    setCurrentWeather(weatherData.current);
    // console.log(forecast)
  };

  // const fetchData=()=>{
  //   return fetch(
  //        `https://api.weatherapi.com/v1/forecast.json?key=2fb459fe9b484d87994162528230204&q=London&days=5&aqi=no&alerts=no`,
  //      {
  //         "content-type": "application/json",
  //      }
  //     )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setForecast(data[forecast]);
  //     });
  // }

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);
  
  const searchCity=(e)=>{
    // e.preventDeafult();
   if(e.keyCode === 13)
   {
    setCity(e.target.value);
    document.getElementById("search-bar").value="";
   }
     
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <div className="input-group m-3 w-25">
          <input
            type="text"
            id="search-bar"
            className="form-control shadow-none"
            placeholder="Search.."
            onKeyDown={searchCity}
          />
          <span className="input-group-text">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <button type="button" onClick={()=>{console.log(currentWeather)}} className="btn btn-primary m-3">
          °C
        </button>
      </div>
      <h1 className="text-center m-3">{city}</h1>
       <div className="d-flex justify-content-center  text-center">
       {currentWeather && (<CurrentDay weather={currentWeather} />)}
       </div>
      
      <div className="d-flex justify-content-around flex-wrap m-3">
      {forecast && forecast.map((data)=>( <Day weather={data} />)
      )}
        {/* <Day />
        <Day />
        <Day />
        <Day />
        <Day /> */}
      </div>
    </div>
  );
}

export default App;
