import React, { useState, useEffect } from 'react'

import { baseUrl, options } from '../../api/index'

const Overview = ({ res_id }) => {
  const [overview, setOverview] = useState('')
  useEffect(() => {
    function fetchOverview() {
      const url = baseUrl + '/restaurant?res_id=' + res_id
      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          const { cuisines, highlights, name, phone_numbers, timings, user_rating, average_cost_for_two } = data
          let x = {
            cuisines,
            highlights, 
            name, 
            phone_numbers, 
            timings, 
            user_rating: user_rating.aggregate_rating, 
            average_cost_for_two
          }
          setOverview(x)
        })
    }
      //fetchOverview()
    }, []
  )
  //console.log(overview)
  return (
    <div>
      Overview
    </div>
  )
}

export default Overview