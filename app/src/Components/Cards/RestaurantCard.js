import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ data }) => {
  return (
    <div>
      <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">
              <Link to={{ pathname: "/restaurant/" + data }}>
                {data}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default RestaurantCard