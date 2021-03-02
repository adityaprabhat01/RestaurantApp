import React from 'react'

import useFetch from '../api/useFetch'
import isEmpty from '../utils'
import Cards from '../Cards/Cards'

const RestaurantList = ({ query, latitude, longitude }) => {
  const data = useFetch('/search?q=' + query + '&lat=' + latitude + '&lon=' + longitude)
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