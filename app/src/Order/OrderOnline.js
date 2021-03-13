import React, { useContext } from 'react'

import RestaurantList from './RestaurantList'
import { SearchContext } from '../Contexts/SearchContext'

const OrderOnline = () => {
  const { coordinates } = useContext(SearchContext)
  const { lat, lon, locationName } = coordinates
  return (
    <div>
      OrderOnline
      <RestaurantList query={locationName} lat={lat} lon={lon} />
    </div>
  )
}

export default OrderOnline