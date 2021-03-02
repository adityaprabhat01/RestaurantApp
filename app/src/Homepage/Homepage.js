import React from 'react'

import SearchBar from '../Search/SearchBar'
import LocationBar from '../Search/LocationBar'

const Homepage = () => {
  return (
    <div>
      Homepage
      <LocationBar LocationName='manipal' />
      <SearchBar lat='13.3490' lon='74.7856' RestaurantName='saiba' />
    </div>
  )  
}

export default Homepage