'use client'

import { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
import './App.css'

const API_KEY = '' // Replace with your TMDB API key
const API_URL = 'https://api.themoviedb.org/3'

export default function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async (search = '') => {
    try {
      setLoading(true)
      setError(null)
      const endpoint = search
        ? `${API_URL}/search/movie?api_key=${API_KEY}&query=${search}`
        : `${API_URL}/movie/popular?api_key=${API_KEY}`
      
      const response = await fetch(endpoint)
      if (!response.ok) throw new Error('Failed to fetch movies')
      
      const data = await response.json()
      setMovies(data.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    fetchMovies(term)
  }

  return (
    <div className="app">
      <header>
        <h1>Movie Database</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      
      <main>
        {loading && <div className="loading">Loading movies...</div>}
        {error && <div className="error">Error: {error}</div>}
        
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  )
}

