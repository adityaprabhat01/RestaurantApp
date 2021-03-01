import React from 'react'

import isEmpty from '../utils'
import useFetch from '../api/useFetch'
import CollectionDetail from './CollectionDetail'
import Cards from '../Cards/Cards'

const CollectionList = ({ city_id }) => {
  console.log("hello")
  console.log(city_id)
  const data = useFetch('/collections?city_id=', city_id)
  const { collections } = data

  console.log(collections)

  return (
    <div>
      <CollectionDetail query='manipal' lat='13.3490' lon='74.7856' collection_id='1' />
      { 
        isEmpty(data) ? 'Loading...' : collections.map(collection => {
        return <Cards 
        data={collection.collection.title} 
        key={collection.collection.collection_id} />}) 
      }
    </div>
  )
}

export default CollectionList