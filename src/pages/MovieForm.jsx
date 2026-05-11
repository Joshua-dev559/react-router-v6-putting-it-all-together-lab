import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";

function MovieForm() {
  const { id } = useParams();
  const { director } = useOutletContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      duration: "120 minutes",
    };

    director.movies.push(newMovie);

    navigate(`/directors/${id}/movies/${newMovie.id}`);
  }

  return (
    <div>
      <h2>Add New Movie</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default MovieForm;