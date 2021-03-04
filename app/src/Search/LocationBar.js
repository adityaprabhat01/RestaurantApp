import isEmpty from '../utils'
import useFetch from '../api/useFetch'

const LocationBar = ({ LocationName }) => {
  const data = useFetch('/cities?q=' + LocationName)
  const loc = useFetch(null, null, true, 'manipal')
  const { location_suggestions } = data
  console.log(location_suggestions)
  if(!isEmpty(loc)){
    const lon = loc.features[0].center[0]
    const lat = loc.features[0].center[1]
    console.log(lat, lon)
  }
  return null
}

export default LocationBar

// location_suggestions[0].id -> entity_id

/**
 * Send lat, lon, city_id to Search component
*/