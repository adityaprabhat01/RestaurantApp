import React from 'react'

import useFetch from '../../api/useFetch'
import Cards from '../../Cards/Cards'
import isEmpty from '../../utils'

const Review = ({ res_id }) => {
  const data = useFetch('/reviews?res_id=', res_id)
  const { user_reviews } = data
  console.log(user_reviews)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : user_reviews.map(user_review => {
        return <Cards 
        data={ 
          user_review.review.rating_text,
          user_review.review.rating, 
          user_review.review.user.name }
        key={ user_review.review.id }
      />}) }
    </div>
  )
}

export default Review