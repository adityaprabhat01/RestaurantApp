import React, { useContext, useState } from 'react'

import useFetchMenu from '../../../api/useFetchMenu'
import isEmpty from '../../../utils'
import MenuCard from '../../Cards/MenuCard'
import { CartContext } from '../../../Contexts/CartContext'

const MenuList = () => {
  const data = useFetchMenu()
  const { cart, add_to_cart } = useContext(CartContext)
  
  return (
    <div>
      MenuList
      { isEmpty(data) ? 'Loading...' : 
         data.map(item => <MenuCard 
          name={item.name}
          price={item.price}
          add_to_cart={add_to_cart}
          key={item.id}
          id={item.id}
          />
        )
      }
    </div>
  )
}

export default MenuList