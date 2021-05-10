import React from 'react'

const ReviewCard = ({ data }) => {
  return (
    <div>
      <div class="ui four cards">
        <div class="card">
          <div class="content">
            <div class="header">{data.username}</div>
            <div class="description">
              {data.rating_text}
            </div>
          </div>
          <div class="image">
            <img />
          </div>
          <div class="extra">
            Rating: {data.rating}
            <div class="ui star rating" dataRating={data.rating}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard