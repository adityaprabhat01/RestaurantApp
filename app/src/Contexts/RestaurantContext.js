import React, { createContext, useState } from 'react'

export const RestaurantContext = createContext()

const RestaurantContextProvider = (props) => {
  const [restaurant, setRestaurant] = useState({
    res_id: '',
    res_name: '',
    res_details: null
  })

  const restaurant_search = (res_id, res_name, res_details) => {
    setRestaurant({ res_id, res_name, res_details })    
  }  
  return (
    <RestaurantContext.Provider value={{ restaurant, restaurant_search }}>
      { props.children }
    </RestaurantContext.Provider>
  )
}

export default RestaurantContextProvider