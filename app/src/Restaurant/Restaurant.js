import React from 'react'

import TabList from './TabList'
import SearchBar from '../Search/SearchBar'
import LocationBar from '../Search/LocationBar'

const Restaurant = () => {
  return (
    <div>
      <LocationBar RestaurantName='' />    
      <SearchBar LocationName='manipal' />
      <TabList />
    </div>
    
  )
}

export default Restaurant