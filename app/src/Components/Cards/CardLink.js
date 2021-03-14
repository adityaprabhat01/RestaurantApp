import React from 'react'
import { Link } from 'react-router-dom'

const CardLink = ({ res_name, id }) => {
  return (
    <div>
      <Link to={{ pathname: "/details/" + id }}>{ res_name }</Link>
    </div>
  )
}

export default CardLink