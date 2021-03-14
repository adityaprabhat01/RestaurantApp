import React, { useContext } from 'react'

import { CartContext } from '../../../Contexts/CartContext'
import DCart from './DCart'

const Cart = () => {
  const { cart, total, remove_from_cart } = useContext(CartContext)
  console.log(cart)
  return (
    <div>
      { cart.map(item =>  <DCart
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        remove_from_cart={remove_from_cart}
        />
      ) }
      <p>Total: {total}</p>
    </div>
  )
}

export default Cart