var citiesList = {
  "Baltimore": {
    title: "Baltimore",
    latitude: 39.2904,
    longitude: -76.6122
  },
  "Boston": {
    title: "Boston",
    latitude: 42.3601,
    longitude: -71.0589
  },
  "Minneapolis": {
    title: "Minneapolis", 
    latitude: 44.9777,
    longitude: -93.2650
  },
  "Sioux Falls": {
    title: "Sioux Falls", 
    latitude: 43.5473,
    longitude: -96.7283
  },
  "Des Moines": {
    title: "Des Moines", 
    latitude: 41.5868, 
    longitude: -93.6249
  },
  "Peoria": {
    title: "Peoria", 
    latitude: 40.6936,
    longitude: -89.5890
  },
  "Indianapolis": {
    title: "Indianapolis", 
    latitude: 39.7684,
    longitude: -86.1581
  },
  "Atlanta": {
    title: "Atlanta", 
    latitude: 33.7490,
    longitude: -84.3880
  },
  "Chicago": {
    title: "Chicago", 
    latitude: 41.8781,
    longitude: -87.6298
  },
  "Tampa": {
    title: "Tampa", 
    latitude: 27.9506,
    longitude: -82.4572
  },
  "London": {
    title: "London",
    latitude: 51.5002,
    longitude: -0.1262,
  },
  "Madrid": {
    title: "Madrid",
    latitude: 40.4167,
    longitude: -3.7033,
  },
  "Barcelona": {
    title: "Barcelona",
    latitude: 41.38,
    longitude: 2.17,
  },
  "Paris": {
    title: "Paris",
    latitude: 48.8567,
    longitude: 2.3510,
  },
  "New York": {
    title: "New York",
    latitude: 40.43,
    longitude: -74,
  },
  "Cleveland": {
    id: "cleveland",
    title: "Cleveland",
    latitude: 41.50,
    longitude: -81.67,
  },
  "Istanbul": {
    title: "Istanbul",
    latitude: 41.01,
    longitude: 28.98,
  },
  "Izmir": {
    title: "Izmir",
    latitude: 38.42,
    longitude: 27.14,
  },
  "Amsterdam": {
    title: "Amsterdam",
    latitude: 52.37,
    longitude: 4.89,
  },
  "St Louis": {
    title: "St Louis",
    latitude: 38.6270,
    longitude: -90.1994
  },
  "Toronto": {
    title: "Toronto",
    latitude: 43.6532,
    longitude: -79.3832
  }
};

const routes = [
  {
    from: "Cleveland",
    to: 'Baltimore'
  },
  {
    from: 'Baltimore',
    to: "Cleveland",
  },
  {
    from: "Cleveland",
    to: 'Boston'
  },
  {
    from: 'Boston',
    to: "Cleveland",
  },
  {
    from: "Cleveland",
    to: 'Minneapolis'
  },
  {
    from: "Minneapolis", 
    to: "Sioux Falls"
  },
  {
    from: "Sioux Falls",
    to: "Des Moines"
  },
  {
    from: "Des Moines", 
    to: "Peoria",
  },
  {
    from: "Peoria", 
    to: "Indianapolis"
  },
  {
    from: "Indianapolis",
    to: "Cleveland" 
  },
  {
    from: "Cleveland",
    to: 'Atlanta'
  },
  {
    from: 'Atlanta',
    to: "Cleveland"
  },
  {
    from: "Cleveland",
    to: 'Chicago'
  },
  {
    from: "Chicago",
    to: 'Cleveland'
  },
  {
    from: "Cleveland",
    to: 'New York'
  },
  {
    from: "New York",
    to: 'London'
  },
  {
    from: "London",
    to: "Istanbul"
  },
  {
    from: "Istanbul",
    to: "Izmir"
  },
  {
    from: "Izmir",
    to: "Istanbul"
  },
  {
    from: "Istanbul",
    to: "Amsterdam"
  },
  {
    from: "Amsterdam",
    to: "Paris"
  },
  {
    from: "Paris",
    to: "New York"
  },
  {
    from: "New York",
    to: "Cleveland"
  },
  {
    from: "New York",
    to: "Madrid"
  },
  {
    from: "Madrid",
    to: "Barcelona"
  },
  {
    from: "Barcelona",
    to: "New York"
  },
  {
    from: "Cleveland",
    to: 'Tampa'
  },
  {
    from: "Tampa",
    to: 'Cleveland'
  },
  {
    from: "Cleveland",
    to: 'St Louis'
  },
  {
    from: "St Louis",
    to: 'Cleveland'
  },
  {
    from: "Cleveland",
    to: 'Toronto'
  },
  {
    from: "Toronto",
    to: 'Cleveland'
  }
];

var allLines = routes.map(route => {
  return {
    "multiGeoLine": [
      [
        { "latitude": citiesList[route.from].latitude, "longitude": citiesList[route.from].longitude },
        { "latitude": citiesList[route.to].latitude, "longitude": citiesList[route.to].longitude }
      ]
    ]
  };
})


export let cities = Object.values(citiesList);
export let lines = allLines;