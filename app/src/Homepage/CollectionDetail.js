import React from 'react'

import useFetch from '../api/useFetch'
import isEmpty from '../utils'

const CollectionDetail = ({ query, lat, lon, collection_id }) => {
  const data = useFetch('/search?q=' + query + '&lat=' + lat + '&lon=' + lon + '&collection_id=' + collection_id)
  console.log(data)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : 'fetched' }
    </div>
  )
}

export default CollectionDetail