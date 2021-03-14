import React from 'react'

const CartCard = ({ id, name, price, remove_from_cart }) => {
  function handleClick(){
    console.log(id, price)
    remove_from_cart(id, price)
  }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={handleClick}>Remove: {price}</button>
    </div>
  )
}

export default CartCard