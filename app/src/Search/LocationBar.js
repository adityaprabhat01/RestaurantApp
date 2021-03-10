import { useContext, useEffect } from 'react'

import isEmpty from '../utils'
import isEmptyArray from '../utils'
import useFetch from '../api/useFetch'
import { SearchContext } from '../Contexts/SearchContext'

const LocationBar = ({ locationName }) => {
  const data = useFetch('/cities?q=' + locationName)
  const loc = useFetch(null, null, true, locationName)
  const { location_search } = useContext(SearchContext)
  const { location_suggestions } = data
  useEffect(() => {
    if(!isEmpty(loc) && !isEmpty(data)){
      const lon = loc.features[0].center[0]
      const lat = loc.features[0].center[1]
      const city_id = location_suggestions[0].id
      location_search(lat, lon, city_id, locationName)
    }
  }, [data, loc])
  return null
}

export default LocationBar

// location_suggestions[0].id -> entity_id