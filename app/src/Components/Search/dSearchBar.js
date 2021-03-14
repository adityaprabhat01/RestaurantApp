import React, { useState, useContext, useEffect } from 'react'

import SearchBar from './SearchBar'
import { SearchContext } from '../../Contexts/SearchContext'

const DisplaySearchBar = () => {
  const [value, setValue] = useState({ render: false, restaurantName: '' })
  const { coordinates } = useContext(SearchContext)
  const { lat, lon } = coordinates
  function onSubmit(event){
    event.preventDefault()
    setValue({ render: true, restaurantName: event.target[0].value })
  }
  return (
    <div>      
      <form onSubmit={ onSubmit }>
        <input type="text" id="searchBar" name="search" style={{height: "20px", width: "20px"}}></input>
        <input type="submit" value="Submit"></input>
      </form>
      { value.render == false ? null : <SearchBar lat={lat} lon={lon} restaurantName={value.restaurantName} /> }
    </div>
  )
}

export default DisplaySearchBar