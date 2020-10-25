import React from 'react'
import SearchBar from '../Search/SearchBar'
import Review from './Review'
import Overview from './Overview'

const Restaurant = () => {
  return (
    <React.Fragment>
      <Overview res_id='18812310' />
      <SearchBar locationName='Manipal' />
      <Review res_id='18812310' />
    </React.Fragment>
    
  )
}

export default Restaurant