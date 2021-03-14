import React from 'react'

import useFetch from '../../api/useFetch'
import isEmpty from '../../utils'
import Cards from '../Cards/Cards'
import RestaurantCard from '../Cards/RestaurantCard'

const RestaurantList = ({ query, lat, lon }) => {
  const data = useFetch('/search?entity_type=city&q=' + query + '&lat=' + lat + '&lon=' + lon)  
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : data.restaurants.map(restaurant => {
        return <RestaurantCard
        data={ restaurant.restaurant.name }
        key={ restaurant.restaurant.R.res_id }
      />}) }
    </div>
  )
}

export default RestaurantList