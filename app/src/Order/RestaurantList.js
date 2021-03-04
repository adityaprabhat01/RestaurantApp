import React from 'react'

import useFetch from '../api/useFetch'
import isEmpty from '../utils'
import Cards from '../Cards/Cards'

const RestaurantList = ({ query, lat, lon }) => {
  console.log(query, lat, lon)
  const data = useFetch('/search?entity_type=city&q=' + query + '&lat=' + lat + '&lon=' + lon)
  console.log(data)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : data.restaurants.map(restaurant => {
        return <Cards
        data={ restaurant.restaurant.name }
        key={ restaurant.restaurant.R.res_id }
      />}) }
    </div>
  )
}

export default RestaurantList