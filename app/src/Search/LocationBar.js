import React from 'react'

import useFetch from '../api/useFetch'
import DisplayLocationBar from './dLocationBar'

const LocationBar = ({ LocationName }) => {
  const data = useFetch('/cities?q=', LocationName)
  const { location_suggestions } = data
  console.log(location_suggestions)
  return (
    <div>
      <DisplayLocationBar />
    </div>
  )
}

export default LocationBar