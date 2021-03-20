import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

const SearchBar = ({ lat, lon, restaurantName }) => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    setRedirect(true)
  }, [lat, lon, restaurantName])

  return (
    <div>
      { redirect === false ? 'Loading...' : <Redirect to={"/restaurant/" + restaurantName} /> }
    </div>
  )
}

export default SearchBar