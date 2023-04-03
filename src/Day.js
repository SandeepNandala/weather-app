
function Day() {
  return (
    <div className="card m-3" style={{ width:"18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Monday</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">03-04-2023</h6>
        <span className="d-inline-flex ">
            <img alt="day.."/>
            <h1 className="mx-5">35°C</h1>
        </span>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        
      </div>
    </div>
  );
}

export default Day;