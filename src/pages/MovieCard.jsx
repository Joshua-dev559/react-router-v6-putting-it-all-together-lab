import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { movieId } = useParams();
  const { director } = useOutletContext();

  const movie = director.movies.find((m) => m.id === movieId);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>

      <p>Duration: {movie.duration}</p>

      <p>{movie.genres}</p>
    </div>
  );
}

export default MovieCard;