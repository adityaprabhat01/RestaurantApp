import React from 'react'

import useFetch from '../../../api/useFetch'
import ReviewCard from '../../Cards/ReviewCard'
import isEmpty from '../../../utils'

const Review = ({ res_id }) => {
  const data = useFetch('/reviews?res_id=' + res_id)
  const { user_reviews } = data
  return (
    <div>
      <b>Review</b>
      { isEmpty(data) ? 'Loading...' : user_reviews.map(user_review => {
        return <ReviewCard
        data={{
          username: user_review.review.user.name,
          rating: user_review.review.rating,
          rating_text: user_review.review.rating_text,
        }}
        key={ user_review.review.id }
      />}) }
    </div>
  )
}

export default Review