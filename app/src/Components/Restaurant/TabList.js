import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'

import Order from './Order/Order'
import Overview from './Overview/Overview'
import Review from './Review/Review'
import { RestaurantContext } from '../../Contexts/RestaurantContext'
import Menu from './Menu/Menu'

const TabList = () => {
  const { restaurant } = useContext(RestaurantContext)
  const { res_id } = restaurant
  const [redirect, setRedirect] = useState(false)
  function handleClick(e){
    e.preventDefault()
    setRedirect(true)
  }
  return (
    <div>
      <button onClick={handleClick}>Cart</button>
      <Overview res_id={res_id} />
      <Review res_id={res_id} />
      <Menu />
      <Order />
      { redirect === false ? null : <Redirect to="/cart" /> }
    </div>
  )
}

export default TabList