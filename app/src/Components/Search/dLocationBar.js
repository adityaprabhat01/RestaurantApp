import React, { useState } from 'react'
import LocationBar from './LocationBar'

const DisplayLocationBar = () => {
  const [value, setValue] = useState({ render: false, locationName: '' })
  function handleSubmit(event){
    event.preventDefault()
    setValue({ render: true, locationName: event.target[0].value })
  }
  return (
    <div style={{ width: "20%" }}>      
      <form onSubmit={ handleSubmit } style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" id="searchBar" name="search" style={{height: "60px", width: "auto", borderRadius: "0.8rem" }}></input>
        <input type="submit" value="Submit" style={{width: "auto"}}></input>
      </form>
      { value.render == false ? null : <LocationBar locationName={ value.locationName } /> }
    </div>
  )
}

export default DisplayLocationBar