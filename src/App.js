import { useEffect, useState } from "react";
import Day from "./Day";
function App() {
  const [city, setCity] = useState('');
  // const APIkey = "061d9e2eb69720daf4505bd0a670886d";
  // const units = "metric";
  // const url= `api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${APIkey}`
  // const url= `https://api.weatherapi.com/v1/forecast.json?key=2fb459fe9b484d87994162528230204&q=London&days=5&aqi=no&alerts=no`

  useEffect(() => {
    const fetchWeatherData = async () => {  
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2fb459fe9b484d87994162528230204&q=London&days=5&aqi=no&alerts=no`,{
        "content-type":"application/json"
      });
      const data = await response.json();
      console.log(data);
    };
    fetchWeatherData();
  },[]);

  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <div className="input-group m-3 w-25">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Search.."
          />
          <span className="input-group-text">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <button type="button" className="btn btn-primary m-3">
          °C
        </button>
      </div>
      <h1 className="text-center m-3">City Name</h1>
      <div className="d-flex justify-content-around flex-wrap m-3">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  );
}

export default App;
