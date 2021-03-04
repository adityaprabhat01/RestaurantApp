import React from 'react'

import TabList from './TabList'
import DisplayLocationBar from '../Search/dLocationBar'
import DisplaySearchBar from '../Search/dSearchBar'
import Search from '../Search/Search'

const Restaurant = () => {
  return (
    <div>
      <Search />
      <TabList />
    </div>
    
  )
}

export default Restaurant