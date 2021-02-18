import React from 'react'

import Order from './Order/Order'
import Overview from './Overview/Overview'
import Review from './Review/Review'

const TabList = () => {
  return (
    <div>
      <Overview res_id='18812310' />
      <Order />
      <Review res_id='18812310' />
    </div>
  )
}

export default TabList