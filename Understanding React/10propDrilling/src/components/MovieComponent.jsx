import MovieAnalytics from './MovieAnalytics.jsx'
import MovieList from './MovieList.jsx'
import { movies } from '../data/movies.js'
import '../movies.css'

const fetchMovieData = () => {
  return movies
}

const MovieComponent = () => {
  const movieData = fetchMovieData()

  return (
    <div className="movie - container">
      <MovieList movies={movieData} />
      <MovieAnalytics data={movieData} />
    </div>
  )
}

export default MovieComponent
