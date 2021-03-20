import { useState, useEffect } from 'react'

const useFetchMenu = (res_id) => {
  const url = 'http://localhost:8000/menu'
  const [data, setData] = useState({})  
  useEffect(() => {
    console.log("Fetch menu")
    async function fetchMenu() {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }
    fetchMenu()
    }, [res_id]
  )
  return data
}

export default useFetchMenu