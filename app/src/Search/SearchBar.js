import useFetch from '../api/useFetch'

const SearchBar = ({ lat, lon, RestaurantName }) => {
  const data = useFetch('/search?entity_type=&q=' + RestaurantName + '&lat=' + lat + '&lon=' + lon)
  console.log(data)
  return null
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