
function CurrentDay(props) {
    const {weather,celcius}=props;
    // console.log(weather);
  
    return (
      <div className="card text-center m-3" style={{ width:"38rem"}}>
        <div className="card-body">
          <h5 className="card-title">Current Weather</h5>
          {/* <h6 className="card-subtitle mb-2 text-body-secondary">03-04-2023</h6> */}
          <span className="d-inline-flex ">
              <img src={weather.condition.icon} alt="day.."/>
              <h1 className="mx-5">{celcius?`${weather.temp_c}°C`:`${weather.temp_f}°F`}</h1>
          </span>
          <p className="card-text">
             {weather.condition.text}
          </p>
          
        </div>
      </div>
    );
  }
  
  export default CurrentDay;