import React from 'react'

import isEmpty from '../utils'
import useFetch from '../api/useFetch'

const Collections = ({ city_id }) => {
  console.log(city_id)
  const data = useFetch('/collections?city_id=', city_id)
  const { collections } = data
  console.log(collections)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : collections[0].collection.description }
    </div>
  )
}

export default Collections