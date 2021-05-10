import React from 'react'
import { Link } from 'react-router-dom'

const CardLink = ({ res_name, id }) => {
  return (
    <div>
      <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">
              <Link to={{ pathname: "/details/" + id }}>{ res_name }</Link>
            </div>
            {/* <div class="meta">Friend</div>
            <div class="description">
              Elliot Fu is a film-maker from New York.
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardLink