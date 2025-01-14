import './MovieCard.css'

export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.jpg'

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className="rating">★ {movie.vote_average.toFixed(1)}</span>
        <p className="overview">{movie.overview}</p>
        <p className="release-date">Released: {movie.release_date}</p>
      </div>
    </div>
  )
}

