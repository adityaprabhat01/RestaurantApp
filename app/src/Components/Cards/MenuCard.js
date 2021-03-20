import React, { useContext, useState } from 'react'

const MenuCard = ({ id, name, price, add_to_cart, status }) => {
  const [added, setAdded] = useState(status)
  console.log(added)
  function handleClick(){
    add_to_cart(id, name, price)
    setAdded(true)
  }

  return (
    <div>
      <p>Name: {name}</p>
      { 
        added === false ? 
        <button onClick={handleClick}>Add: {price}</button> :
        <button>Added: {price}</button>
      }
    </div>
  )
}

export default MenuCard