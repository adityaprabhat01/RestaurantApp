import React from 'react'

import useFetch from '../api/useFetch'
import isEmpty from '../utils'
import Cards from '../Cards/Cards'

const CollectionDetail = ({ query, lat, lon, collection_id }) => {
  const data = useFetch('/search?q=' + query + '&lat=' + lat + '&lon=' + lon + '&collection_id=' + collection_id)
  const { restaurants } = data
  console.log(data)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : restaurants.map(restaurant => {
        return <Cards 
          data={restaurant.restaurant.name}
          key={restaurant.restaurant.R.res_id}
        />}) 
      }
    </div>
  )
}

export default CollectionDetail