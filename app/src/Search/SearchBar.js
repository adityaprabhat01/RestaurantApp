import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import isEmpty from '../utils'
import useFetch from '../api/useFetch'
import { RestaurantContext } from '../Contexts/RestaurantContext'

const SearchBar = ({ lat, lon, restaurantName }) => {
  const { restaurant_search } = useContext(RestaurantContext)
  const [redirect, setRedirect] = useState(false)
  const data = useFetch('/search?entity_type=&q=' + restaurantName + '&lat=' + lat + '&lon=' + lon)
  useEffect(() => {
    if(!isEmpty(data)){
      const res_id = data.restaurants[0].restaurant.R.res_id
      const res_name = data.restaurants[0].restaurant.name
      const res_details = data.restaurants[0]
      restaurant_search(res_id, res_name, res_details)
      setRedirect(true)
    }
  },[data])
  return (
    <div>
      { redirect === false ? 'Loading...' : <Redirect to={"/restaurant/" + data.restaurants[0].restaurant.name} /> }
    </div>
  )
}

export default SearchBar

/*
  entity_id
  entity_type
  query -> restaurant name
*/

/*
    context api -> entity_id and entity_type from LocationBar
*/

/**
 * Send lat, lon, city_id to Search component
*/