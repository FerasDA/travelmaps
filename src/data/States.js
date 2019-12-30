import * as am4core from "@amcharts/amcharts4/core";

var thisYearsStates = ["US-OH", "US-MD", "US-NY", "US-MN", "US-SD", "US-IA", "US-IL", "US-IN", "US-MA", "US-GA", "US-FL"].map(state => {
  return {
    "id": state,
    "fill": am4core.color("#5FCA26")
  }
});

var visitedStates = ["US-CA", "US-NV", "US-TX", "US-OK", "US-KS", "US-NE", "US-MO", "US-SC", "US-NC", "US-VA", "US-MI", "US-WI", "US-PA", "US-RI", "US-NJ"].map(state => {
  return {
    "id": state,
    "fill": am4core.color("#C9EDB6")
  }
});

export var states = thisYearsStates.concat(visitedStates);