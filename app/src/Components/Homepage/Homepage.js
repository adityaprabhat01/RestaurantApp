import React from 'react'

import HomeHeader from '../Image/HomeHeader'
import HeaderText from '../Image/HeaderText'
import Collections from '../Collections/Collections'
import Order from '../Order/Order'

const Homepage = () => {  
  return (
    <div style={{ zIndex: "-1" }}>
      <HomeHeader />
      <HeaderText />
      <Collections />
      <Order />
    </div>
  )  
}

export default Homepage