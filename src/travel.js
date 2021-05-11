import React, { useState, useEffect } from "react";
import Trips from "./components/trips";

const greenStyle = {
  float: "left",
  width: "20px",
  height: "20px",
  margin: "5px",
  border: "1px solid rgba(0, 0, 0, .2)",
  background: "#5FCA26",
};
const lightGreenStyle = {
  float: "left",
  width: "20px",
  height: "20px",
  margin: "5px",
  border: "1px solid rgba(0, 0, 0, .2)",
  background: "#C9EDB6",
};

function TravelPage() {
  const pageTitle = "My 2019 Travel Map";
  const [isLoading, setLoading] = useState(true);
  const [cities, setCities] = useState({});

  const getCities = async () => {
    const response = await fetch("/.netlify/functions/getCities");
    const cities = await response.json();
    setCities(cities);
    setLoading(false);
    return cities;
  };

  useEffect(() => {
    getCities();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <h1 style={{ margin: "30px" }}>{pageTitle}</h1>
      <Trips cities={cities} />
      <div style={{ margin: "30px" }}>
        <div style={greenStyle}></div>
        <p>Countries/States Visited in 2019</p>
        <div style={lightGreenStyle}></div>
        <p>Countries/States previously Visited</p>
        <p>
          I created this map using{" "}
          <a
            href="https://www.amcharts.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            amCharts
          </a>{" "}
          in a React App. Source code is available on my Github:{" "}
          <a
            href="https://github.com/FerasDA/travelmaps"
            target="_blank"
            rel="noopener noreferrer"
          >
            travelmaps
          </a>
        </p>
      </div>
    </>
  );
}

export default TravelPage;
