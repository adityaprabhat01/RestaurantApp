import { useState, useEffect } from 'react'

import { baseUrl, options } from './index'

function useFetch(res_id){
  const [data, setData] = useState({})
  const [status, setStatus] = useState(false)
  const url = baseUrl + '/reviews?res_id=' + res_id
  useEffect(() => {
    async function getReview() {
      const response = await fetch(url, options)
      const data = await response.json()
      setData(data)
      setStatus(true)
    }
      getReview()
    }, [url] // called only once, not after every render
  )
  return data
}

export default useFetch