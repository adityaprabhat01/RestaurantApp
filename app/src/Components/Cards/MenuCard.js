import React, { useState } from 'react'
import './cards.css'

const MenuCard = ({ id, name, price, add_to_cart, status }) => {
  const [added, setAdded] = useState(status)
  function handleClick(){
    add_to_cart(id, name, price)
    setAdded(true)
  }

  return (    
    <div class="ui items">
      <div class="item">
        <div class="middle aligned content">
          <div class="header">
            {name}
          </div>
          <div class="description">
            <p>{price}</p>
          </div>
          <div class="extra">
            {
              added === false ?
              <button onClick={handleClick} class="ui pink button">
                Add
              </button> :
              <button class="ui button">
                Added
              </button>
            }
          </div>
        </div>
      </div>
      <hr class="hr-menu" />
    </div>
  )
}

export default MenuCard