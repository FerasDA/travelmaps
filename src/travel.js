import React from "react"
import Trips from "./components/trips"

const greenStyle = {
  float: 'left',
  width: '20px',
  height: '20px',
  margin: '5px',
  border: '1px solid rgba(0, 0, 0, .2)',
  background: '#5FCA26'
}
const lightGreenStyle = {
  float: 'left',
  width: '20px',
  height: '20px',
  margin: '5px',
  border: '1px solid rgba(0, 0, 0, .2)',
  background: '#C9EDB6'
}

class TravelPage extends React.Component {
  render() {
    const pageTitle = "My 2019 Travel Map"
    return (
      <>
        <h1 style={{margin: "30px"}} >{pageTitle}</h1>
        <Trips />
        <div style={greenStyle}></div>
        <p>Countries/States Visited in 2019</p>
        <div style={lightGreenStyle}></div>
        <p>Countries/States previously Visited</p>
      </>
    )
  }
}

export default TravelPage