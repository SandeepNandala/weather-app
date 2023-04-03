// CurrentDay component to display current weather info 
function CurrentDay(props) {
  // getting the weather and celcius 
  const { weather, celcius } = props;

  return (
    <div className="card text-center m-3" style={{ width: "38rem" }}>
      <div className="card-body">
        <h5 className="card-title">Current Weather</h5>
        <span className="d-inline-flex ">
          {/* displaying the current weather icon from the API */}
          <img src={weather.condition.icon} alt="day.." />
          <h1 className="mx-5">
            {/* displaying the temperature */}
            {celcius ? `${weather.temp_c}°C` : `${weather.temp_f}°F`}
          </h1>
        </span>
        <p className="card-text">{weather.condition.text}</p>
      </div>
    </div>
  );
}

export default CurrentDay;
