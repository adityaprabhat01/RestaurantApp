import React, { createContext, useState } from 'react'

export const CartContext = createContext()

function CartContextProvider(props){
  const [cart, setCart] = useState([])
  const [inCart, setInCart] = useState([])
  const [total, setTotal] = useState(0)

  const add_to_cart = (id, name, price) => {
    const item = {
      id,
      name,
      price
    }
    setCart([...cart, item])
    setTotal(total + item.price)
    update_cart(id)
  }

  function remove_from_cart(id, price){
    let filterdState = cart.filter(item => {
      return id != item.id
    })
    setCart(filterdState)
    setTotal(total - price)

    var array = inCart
    const index = array.indexOf(id)
    if(index != -1){
      array.splice(index, 1)
      setInCart(array)
    }
  }

  async function flush_cart(){
    setCart([])
    setInCart([])
    setTotal(0)
    console.log("flush cart", inCart)
  }

  function update_cart(id){
    setInCart([...inCart, id])
  }

  return (
    <CartContext.Provider value={{ cart, inCart, total, add_to_cart, remove_from_cart, flush_cart, update_cart }}>
      { props.children }
    </CartContext.Provider>
  )
}

export default CartContextProvider