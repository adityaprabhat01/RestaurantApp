import React from 'react'

const MenuCard = ({ id, name, price, add_to_cart }) => {
  function handleClick(){
    add_to_cart(id, name, price)
  }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={handleClick}>Add: {price}</button>
    </div>
  )
}

export default MenuCard