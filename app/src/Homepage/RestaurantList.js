import React from 'react'

import useFetch from '../api/useFetch'
import isEmpty from '../utils'

const RestaurantList = ({ query, latitude, longitude }) => {
  const data = useFetch('/search?q=' + query + '&lat=' + latitude + '&lon=' + longitude)
  const x = useFetch(null, null, true, 'manipal');
  console.log(x)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : data.results_found }
    </div>
  )
}

export default RestaurantList