import React from 'react'
import { useEffect } from 'react'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'

//4c15de18

const API_URL = 'http://www.omdbapi.com?apikey=4c15de18'

const movie1 = {
  "Title": "Ultimate Avengers II",
  "Year": "2006",
  "imdbID": "tt0803093",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.Search)
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

      <div className='container'>
        <MovieCard movie1={movie1} />
      </div>

    </div>
  )
}

export default App