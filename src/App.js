import { useEffect, useState } from "react";
import Day from "./Day";
import CurrentDay from "./CurrentDay";
import { APIkey } from "./APIkeys";
import { toast } from "react-hot-toast";

function App() {
  const [city, setCity] = useState("London");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [country,setCountry]=useState("UK");
  const [loading,setLoading]=useState(true);
  const [celcius,setCelcius]=useState(true);

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${city}&days=5&aqi=no&alerts=no`,
        {
          "content-type": "application/json",
        }
      );
      const weatherData = await response.json();
      setForecast(weatherData.forecast.forecastday);
      setCity(weatherData.location.name);
      setCurrentWeather(weatherData.current);
      setCountry(weatherData.location.country);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("we didn't find any city")
      setLoading(false);
    }
    
    // console.log(forecast)
  };

  useEffect(() => {
    fetchWeatherData(city,APIkey);
  }, [city]);
  
  const searchCity=(e)=>{
    // e.preventDeafult();
   if(e.keyCode === 13)
   {
    setCity(e.target.value);
    document.getElementById("search-bar").value="";
    setLoading(true);
   }
     
  }
  if(loading)
  {
    return (
      <div className="d-flex justify-content-center" style={{marginTop:"20rem"}}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden align-self-baseline">Loading...</span>
      </div>
      </div>
    )
   
  }
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
          {/* <span className="input-group-text">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </span> */}
        </div>
        <button type="button" onClick={()=>{setCelcius(celcius?false:true)}} className="btn btn-primary m-3">
         {celcius?'°F':'°C'}
        </button>
      </div>
      <h1 className="text-center m-3">{city}, {country}</h1>
       <div className="d-flex justify-content-center  text-center">
       {currentWeather && (<CurrentDay celcius={celcius} weather={currentWeather} />)}
       </div>
       <h1 className="text-center m-3">5-Day Forecast</h1>
      <div className="d-flex justify-content-around flex-wrap m-3">
      {forecast && forecast.map((data)=>( <Day key={`weather-${data.date_epoch}`} celcius={celcius} weather={data} />)
      )}
      </div>
    </div>
  );
}

export default App;
