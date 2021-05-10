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
    <div style={{ width: "40%" }}>
      
      <form onSubmit={ onSubmit } style={{ display: "flex", flexDirection: "column" }}>
        {/* <input type="text" id="searchBar" name="search" style={{height: "60px", width: "auto", borderRadius: "0.8rem"}}></input> */}
        <div class="ui icon input">
          <input style={{ width: "auto" }} type="text" placeholder="Search Restaurant..." />
          <i class="inverted circular search link icon"></i>
        </div>
        <input class="ui primary button" type="submit" value="Submit"></input>
      </form>
      { value.render == false ? null : <SearchBar lat={lat} lon={lon} restaurantName={value.restaurantName} /> }
    </div>
    
  )
}

export default DisplaySearchBar