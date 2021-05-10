import React from 'react'

import img from './1.jpeg'

const HomeHeader = () => {
  return (
    <div>
      <img src={ img } style={{ height: "500px", width: "100%", objectFit: "cover" }} />
    </div>
  )
}

export default HomeHeader