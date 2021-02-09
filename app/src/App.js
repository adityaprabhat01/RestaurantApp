import React from 'react'
import Homepage from './Homepage/Homepage'
import Restaurant from './Restaurant/Restaurant'
import SearchBar from './Search/SearchBar'


const App = () => {
  return(
    <React.Fragment>
      <SearchBar />
      <Homepage />
      <Restaurant />
    </React.Fragment>
  )
}

export default App