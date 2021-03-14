import React, { useContext } from 'react'

import isEmpty from '../../utils'
import useFetch from '../../api/useFetch'
import CardLink from '../Cards/CardLink'
import { SearchContext } from '../../Contexts/SearchContext'

const CollectionList = () => {
  const { coordinates } = useContext(SearchContext)
  const { city_id } = coordinates
  const data = useFetch('/collections?city_id=' + city_id)
  const { collections } = data

  return (
    <div>
      {
        isEmpty(data) ? 'Loading...' : collections.map(collection => {
        return <CardLink
        res_name={collection.collection.title}
        id={collection.collection.collection_id}
        key={collection.collection.collection_id} />}) 
      }
    </div>
  )
}

export default CollectionList