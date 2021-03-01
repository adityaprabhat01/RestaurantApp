import React from 'react'

import useFetch from '../api/useFetch'
import DisplaySearchBar from './dSearchBar'

const SearchBar = ({ RestaurantName }) => {
  const data = useFetch('/locations?query=', RestaurantName)
  const { location_suggestions } = data
  console.log(location_suggestions)
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