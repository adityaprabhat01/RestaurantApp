import React, { useState } from 'react'
import LocationBar from './LocationBar'

const DisplayLocationBar = () => {
  const [value, setValue] = useState({ render: false, locationName: '' })
  function handleSubmit(event){
    event.preventDefault()
    setValue({ render: true, locationName: event.target[0].value })
  }
  return (
    <div>      
      <form onSubmit={ handleSubmit }>
        <input type="text" id="searchBar" name="search" style={{height: "20px", width: "20px"}}></input>
        <input type="submit" value="Submit"></input>
      </form>
      { value.render == false ? null : <LocationBar locationName={ value.locationName } /> }
    </div>
  )
}

export default DisplayLocationBar