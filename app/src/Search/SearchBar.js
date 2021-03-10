import React from 'react'
import { Link } from 'react-router-dom'

import isEmpty from '../utils'
import useFetch from '../api/useFetch'

const SearchBar = ({ lat, lon, restaurantName }) => {
  const data = useFetch('/search?entity_type=&q=' + restaurantName + '&lat=' + lat + '&lon=' + lon)
  console.log(data)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : <Link to={{ pathname: "/restaurant" }}> {data.restaurants[0].restaurant.name} </Link> }
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