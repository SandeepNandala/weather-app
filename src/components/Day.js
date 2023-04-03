// Day component to display the forecast day weather info
function Day(props) {
  const { weather, celcius } = props;

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        {/* displaying the date */}
        <h5 className="card-title">{weather.date}</h5>
        <span className="d-inline-flex ">
            {/* displaying the current weather icon from the API */}
          <img src={weather.day.condition.icon} alt="day.." />
          <h1 className="mx-5">
            {/* displaying the temperature */}
            {celcius
              ? `${weather.day.avgtemp_c}°C`
              : `${weather.day.avgtemp_f}°F`}
          </h1>
        </span>
        <p className="card-text">{weather.day.condition.text}</p>
      </div>
    </div>
  );
}

export default Day;
