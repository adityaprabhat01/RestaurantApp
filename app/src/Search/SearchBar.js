import React, { useState, useEffect } from 'react'

import { baseUrl, options } from '../api/index'

const SearchBar = ({ locationName }) => {
  const [location, setLocation] = useState('')
  useEffect(() => {
    function getLocation() {
      const url = baseUrl + '/locations?query=' + locationName
      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          const { location_suggestions } = data
          let x = {
            city_id: location_suggestions[0].city_id,
            city_name: location_suggestions[0].city_name
          }
          setLocation(x)
        })
      }
      getLocation()
    }, [] // dependency array showing warning
  )

  console.log(location)

  return (
    <div>
      SearchBar
    </div>
  )
}

export default SearchBar