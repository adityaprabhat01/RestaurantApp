import React, { useContext, useState } from 'react'

import useFetchMenu from '../../../api/useFetchMenu'
import isEmpty from '../../../utils'
import MenuCard from '../../Cards/MenuCard'
import { CartContext } from '../../../Contexts/CartContext'
import { RestaurantContext } from '../../../Contexts/RestaurantContext'

const MenuList = () => {

  const { restaurant } = useContext(RestaurantContext)
  const { inCart, add_to_cart, update_cart } = useContext(CartContext)

  const { res_id } = restaurant
  const data = useFetchMenu(res_id)

  return (
    <div>
      MenuList
      { 
        isEmpty(data) ? 'Loading...' : 
         data.map(item => 
          inCart.includes(item.id) === true ? 
          <MenuCard 
            key={item.id}
            name={item.name}
            price={item.price}
            add_to_cart={add_to_cart}
            id={item.id}
            status={true}
            update_cart={update_cart}
          /> :
          <MenuCard 
            key={item.id}
            name={item.name}
            price={item.price}
            add_to_cart={add_to_cart}
            id={item.id}
            status={false}
            update_cart={update_cart}
          />
        )
      }
    </div>
  )
}

export default MenuList