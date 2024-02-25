import React from 'react'
import { useEffect } from 'react'

//4c15de18

const API_URL = 'http://www.omdbapi.com?apikey=4c15de18'

const App = () => {

  const serchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    serchMovies('avengers')
  }, [])
  return (
    <div>App</div>
  )
}

export default App