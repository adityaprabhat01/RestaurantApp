import React from 'react'

import Collections from './Collections'
import RestaurantList from './RestaurantList'

const Homepage = () => {
  return (
    <div>
      Homepage
      <Collections city_id='11299' />
      <RestaurantList query='manipal' lat='13.3490' lon='74.7856' />
    </div>
  )  
}

export default Homepage