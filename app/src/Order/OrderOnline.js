import React from 'react'

import RestaurantList from './RestaurantList'

const OrderOnline = () => {
  return (
    <div>
      <RestaurantList query='manipal' lat='13.3490' lon='74.7856' />
    </div>
  )
}

export default OrderOnline