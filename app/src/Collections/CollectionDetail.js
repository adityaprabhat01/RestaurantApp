import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '../api/useFetch'
import isEmpty from '../utils'
import Cards from '../Cards/Cards'
import { SearchContext } from '../Contexts/SearchContext'

const CollectionDetail = () => {  
  let { id } = useParams()
  const { coordinates } = useContext(SearchContext)
  const { lat, lon, locationName } = coordinates
  console.log(locationName, lat, lon, id)
  const data = useFetch('/search?q=' + locationName + '&lat=' + lat + '&lon=' + lon + '&collection_id=' + id)
  const { restaurants } = data
  return (
    <div>
      { 
        isEmpty(data) ? 'Loading...' : restaurants.map(restaurant => {
        return <Cards 
          data={restaurant.restaurant.name}          
          key={restaurant.restaurant.R.res_id}
        />}) 
      }
    </div>
  )
}

export default CollectionDetail