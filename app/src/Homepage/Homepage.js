import React from 'react'

import SearchBar from '../Search/SearchBar'
import LocationBar from '../Search/LocationBar'

const Homepage = () => {
  return (
    <div>
      Homepage
      <LocationBar LocationName='manipal' />
      <SearchBar RestaurantName='laughing buddha' />
    </div>
  )  
}

export default Homepage