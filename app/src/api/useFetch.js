import { useState, useEffect } from 'react'

import { baseUrl, options, geocodeBaseUrl, geocodeApi } from './index'

function useFetch(param, id, isGeocode = false, query = null){
  let url;
  if(isGeocode){
    url = geocodeBaseUrl + query + '.json?access_token=' + geocodeApi
  } else{
    url = baseUrl + param + id
  }
  const [data, setData] = useState({})
  const [status, setStatus] = useState(false)
  
  useEffect(() => {
    async function fetchZomato() {
      const response = await fetch(url, options)
      const data = await response.json()
      setData(data)
      setStatus(true)
    }
    async function fetchMapbox(){
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setStatus(true)
    }
    if(isGeocode){
      fetchMapbox()
    } else{
      fetchZomato()
    }
    }, [url] // called only once, not after every render
  )
  return data
}

export default useFetch