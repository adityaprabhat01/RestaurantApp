import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import TabList from './TabList'
import useFetch from '../../api/useFetch'
import isEmpty from '../../utils'
import { RestaurantContext } from '../../Contexts/RestaurantContext'
import { SearchContext } from '../../Contexts/SearchContext'
import { CartContext } from '../../Contexts/CartContext'
import DRestaurant from './DRestaurant'

const Restaurant = () => {
  const { restaurant, restaurant_search } = useContext(RestaurantContext)
  const { res_name } = useParams()
  const { coordinates } = useContext(SearchContext)
  const { cart, flush_cart } = useContext(CartContext)
  const { lat, lon } = coordinates
  const { res_id } = restaurant
  const [render, setRender] = useState(false)
  const [renderTab, setRenderTab] = useState(false)
  const data = useFetch('/search?entity_type=&q=' + res_name + '&lat=' + lat + '&lon=' + lon)

  useEffect(() => {
    if(!isEmpty(data)){
      const res_id = data.restaurants[0].restaurant.R.res_id
      const res_name = data.restaurants[0].restaurant.name
      const res_details = data.restaurants[0]
      restaurant_search(res_id, res_name, res_details)
      setRender(true)
      setRenderTab(true)
    }
  }, [data])

  useEffect(() => {
    if(cart.length != 0){
      alert("Cart alreay contain items from other restaurant, those items will be removed.")
      console.log("From Restaurant")
      console.log(res_id)
      flush_cart()
    }
  }, [res_id])

  return (
    <div>
      { render === false ? 'Loading...' : <DRestaurant /> }
      { renderTab == false ? 'Loading...' : <TabList /> }
    </div>
  )
}

export default Restaurant