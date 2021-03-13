import React from 'react'

import useFetch from '../../api/useFetch'
import isEmpty from '../../utils'

const Overview = ({ res_id }) => {
  const data = useFetch('/restaurant?res_id=' + res_id)
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
      { isEmpty(data) ? 'Loading...' : 
      <div>
        <p>Name: {name}</p>
        <p>Average Cost for two: {average_cost_for_two}</p>
        <p>Cuisines: {cuisines}</p>
        <p>Establishment: {establishment}</p>
        <p>Has Online Delivery: {has_online_delivery}</p>
        <p>Highlights: {highlights}</p>
        <p>Delivering Now: {is_delivering_now}</p>
        <p>Location: {location.address}</p>
        <p>Contact: {phone_numbers}</p>
        <p>Timings: {timings}</p>
        <p>Rating: {user_rating.aggregate_rating}</p>
      </div>
      }
    </div>
  )
}

export default Overview