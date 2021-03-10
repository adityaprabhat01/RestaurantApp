import React from 'react'
import { Link } from 'react-router-dom'

const CardLink = ({ data, id }) => {
  return (
    <div>
      <Link to={{ pathname: "/details/" + id }}>{ data }</Link>
    </div>
  )
}

export default CardLink