import React from 'react'

const ReviewCard = ({ data }) => {
  return (
    <div>
      <p>{data.username}</p>
      <p>{data.rating}</p>
      <p>{data.rating_text}</p>
    </div>
  )
}

export default ReviewCard