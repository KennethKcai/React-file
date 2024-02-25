import React from 'react'
import { useEffect } from 'react'
import './App.css'

//4c15de18

const API_URL = 'http://www.omdbapi.com?apikey=4c15de18'


const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    searchMovies('avengers')
  }, [])
  return (
    <h1>
      Hello World
    </h1>
  )
}

export default App