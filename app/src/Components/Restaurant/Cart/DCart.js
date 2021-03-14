import React from 'react'
import CartCard from '../../Cards/CartCard'

const DCart = ({ id, name, price, remove_from_cart }) => {
  return (
    <div>
      <CartCard key={id} id={id} name={name} price={price} remove_from_cart={remove_from_cart} />
    </div>
  )
}

export default DCart