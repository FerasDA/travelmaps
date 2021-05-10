import * as am4core from "@amcharts/amcharts4/core";

var thisYearsCountries = ["GB", "FR", "ES", "NL", "TR", "CA"].map(country => {
  return {
    "id": country,
    "fill": am4core.color("#5FCA26")
  }
});

var visitedCountries = ["SY", "LB", "AE", "JO", "GR"].map(country => {
  return {
    "id": country,
    "fill": am4core.color("#C9EDB6")
  }
});

export var countries = thisYearsCountries.concat(visitedCountries);