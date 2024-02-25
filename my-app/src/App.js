import React from 'react'
import { useEffect } from 'react'
import './App.css'
import searchIcon from './search.svg'

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
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value="Superman" onChange={() => {}}/>
        <img 
          src={searchIcon} 
          alt='Search Icon'
          onClick={() => {}}
        />
      </div>

    </div>
  )
}

export default App