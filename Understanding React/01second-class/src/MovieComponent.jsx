import MovieSetUp from './MovieSetUp'
import { movies } from './data/Movies'
import './movies.css'

const fetchMovieData = () => {
  return movies
}

const MovieComponent = () => {
  const movieData = fetchMovieData()

  return (
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className="movie-list">
        {movieData.map((movie) => (
          <MovieSetUp key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default MovieComponent
