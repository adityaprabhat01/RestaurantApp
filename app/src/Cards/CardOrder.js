import React from 'react'
import { Link } from 'react-router-dom'

const CardOrder = ({ data }) => {
  return (
    <div>
      <Link to={{ pathname: "/order-online/" }}>{ data }</Link>
    </div>
  )
}

export default CardOrder