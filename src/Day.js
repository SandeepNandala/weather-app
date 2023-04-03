
function Day(props) {
  const {weather,celcius}=props;
  // console.log(weather);

  return (
    <div className="card m-3" style={{ width:"18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{weather.date}</h5>
        {/* <h6 className="card-subtitle mb-2 text-body-secondary">03-04-2023</h6> */}
        <span className="d-inline-flex ">
            <img src={weather.day.condition.icon} alt="day.."/>
            <h1 className="mx-5">{celcius?`${weather.day.avgtemp_c}°C`:`${weather.day.avgtemp_f}°F`}</h1>
        </span>
        <p className="card-text">
           {weather.day.condition.text}
        </p>
        
      </div>
    </div>
  );
}

export default Day;