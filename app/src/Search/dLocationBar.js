import React, { useState } from 'react'
import LocationBar from './LocationBar'

const DisplayLocationBar = () => {
  const [value, setValue] = useState({ render: false, value: '' })
  function onSubmit(event){
    event.preventDefault()
    setValue({ render: true, value: event.target[0].value })
  }

  return (
    <div>      
      <form onSubmit={ onSubmit }>
        <input type="text" id="searchBar" name="search" style={{height: "20px", width: "20px"}}></input>
        <input type="submit" value="Submit"></input>
      </form>
      { value.render == false ? null : <LocationBar LocationName={ value.value } /> }
    </div>
  )
}

export default DisplayLocationBar