import React, { useState, useEffect } from 'react'

import useFetch from '../../api/useFetch'
import isEmpty from '../../utils'

const Overview = ({ res_id }) => {
  const data = useFetch('/restaurant?res_id=', res_id)
  const { 
    average_cost_for_two,
    cuisines, 
    establishment, 
    has_online_delivery, 
    highlights, is_delivering_now, 
    location, 
    name, 
    phone_numbers, 
    timings, 
    user_rating 
  } = data
  console.log(data)
  return (
    <div>
      { isEmpty(data) ? 'Loading...' : name }
    </div>
  )
}

export default Overview