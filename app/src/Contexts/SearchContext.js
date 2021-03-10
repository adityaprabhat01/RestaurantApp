import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
  const [coordinates, setCoordinates] = useState({
    lat: 13.3490,
    lon: 74.7856,
    city_id: 11299,
    locationName: 'manipal'
  })

  const location_search = (lat, lon, city_id, locationName) =>{
    setCoordinates({ lat, lon, city_id, locationName })
  }
  return (
    <SearchContext.Provider value={{ coordinates, location_search }}>
      { props.children }
    </SearchContext.Provider>
  )
}

export default SearchContextProvider