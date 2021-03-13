import React, { useContext } from 'react'

import Order from './Order/Order'
import Overview from './Overview/Overview'
import Review from './Review/Review'
import { RestaurantContext } from '../Contexts/RestaurantContext'
import { SearchContext } from '../Contexts/SearchContext'

const TabList = () => {
  const { restaurant } = useContext(RestaurantContext)
  const { res_id } = restaurant
  console.log(res_id)
  return (
    <div>
      <Overview res_id={res_id} />
      <Review res_id={res_id} />
      <Order />
    </div>
  )
}

export default TabList