import React, { useState, useEffect } from 'react'

import { baseUrl, options } from '../api/index'

const Review = ({ res_id }) => {
  const [reviews, setReviews] = useState('')
  useEffect(() => {
    function getReview() {
      const url = baseUrl + '/reviews?res_id=' + res_id
      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          const { user_reviews } = data
          setReviews(data)
        })
      }
      getReview()
    }, []
  )
  console.log(reviews)
  return (
    <div>
      Review
    </div>
  )
}

export default Review