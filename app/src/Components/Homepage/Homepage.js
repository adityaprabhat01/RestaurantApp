import React from 'react'

import Collections from '../Collections/Collections'
import Order from '../Order/Order'

const Homepage = () => {  
  return (
    <div>
      Homepage
      Collections
      <Collections />
      <Order />
    </div>
  )  
}

export default Homepage

/*
  Function that submits the search and passes the prop to the search Bar & location separate.
*/