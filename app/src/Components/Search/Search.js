import React from 'react'
import DisplayLocationBar from './dLocationBar'
import DisplaySearchBar from './dSearchBar'

const Search = () => {
  return (
    <div style={{ display: "flex", justifyContent:"center", width: "100%", position: "absolute", marginTop: "20px" }}>
      <DisplayLocationBar />
      <DisplaySearchBar />
    </div>
  )
}

export default Search