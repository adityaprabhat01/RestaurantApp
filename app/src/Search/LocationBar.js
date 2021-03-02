import React from 'react'

import isEmpty from '../utils'
import useFetch from '../api/useFetch'
import DisplayLocationBar from './dLocationBar'

const LocationBar = ({ LocationName }) => {
  const data = useFetch('/cities?q=', LocationName)
  const loc = useFetch(null, null, true, 'manipal')
  const { location_suggestions } = data
  console.log(location_suggestions)
  if(!isEmpty(loc)){
    const lon = loc.features[0].center[0]
    const lat = loc.features[0].center[1]
    console.log(lat, lon)
  }
  return (
    <div>
      <DisplayLocationBar />
    </div>
  )
}

export default LocationBar

// location_suggestions[0].id -> entity_id