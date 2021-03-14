import { useState, useEffect } from 'react'

const useFetchMenu = () => {
  const url = 'http://localhost:8000/menu'
  const [data, setData] = useState({})
  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }
    fetchMenu()
    }, [url]
  )
  return data
}

export default useFetchMenu