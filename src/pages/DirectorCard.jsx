import { useParams, useOutletContext, Outlet, Link } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find((d) => d.id === Number(id));

  if (!director) return <h2>Director not found</h2>;

  return (
    <div>
      <h2>{director.name}</h2>

      <Link to="movies/new">Add New Movie</Link>

      {director.movies.map((m) => (
        <Link key={m.id} to={`movies/${m.id}`}>
          {m.title}
        </Link>
      ))}

      <Outlet context={{ director }} />
    </div>
  );
}

export default DirectorCard;