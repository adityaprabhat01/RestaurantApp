import React, { useState } from 'react'
import SearchBar from './SearchBar'

const DisplaySearchBar = () => {
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
      { value.render == false ? null : <SearchBar lat='13.3490' lon='74.7856' RestaurantName='pai tiffins' /> }
    </div>
  )
}

export default DisplaySearchBar