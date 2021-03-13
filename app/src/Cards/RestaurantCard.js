import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ data }) => {
  return (
    <Link to={{ pathname: "/restaurant/" + data }}>
      {data}
    </Link>
  )
}

export default RestaurantCard