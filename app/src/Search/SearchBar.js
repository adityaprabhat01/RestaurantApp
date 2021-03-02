import React from 'react'

import useFetch from '../api/useFetch'
import DisplaySearchBar from './dSearchBar'

const SearchBar = ({ lat, lon, RestaurantName }) => {
  const data = useFetch('/search?entity_type=&q=' + RestaurantName + '&lat=' + lat + '&lon=' + lon)
  console.log(data)
  return (
    <div>
      <DisplaySearchBar />
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