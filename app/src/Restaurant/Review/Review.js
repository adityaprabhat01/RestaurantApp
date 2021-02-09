import React, { useState, useEffect } from 'react'

import useFetch from '../../api/useFetch'
import isEmpty from '../../utils'

const Review = ({ res_id }) => {
  const data = useFetch(res_id)
  const { user_reviews } = data
  console.log(user_reviews)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : user_reviews[0].review.id }
    </div>
  )
}

export default Review