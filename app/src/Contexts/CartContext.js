import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const add_to_cart = (id, name, price) => {
    const item = {
      id,
      name,
      price
    }
    setCart([...cart, item])
    setTotal(total + item.price)
  }
  const remove_from_cart = (id, price) => {
    let filterdState = cart.filter(item => {
      return id != item.id
    })
    setCart(filterdState)
    console.log(filterdState)
    setTotal(total - price)
  }
  return (
    <CartContext.Provider value={{ cart, total, add_to_cart, remove_from_cart }}>
      { props.children }
    </CartContext.Provider>
  )
}

export default CartContextProvider