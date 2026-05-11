import { Link, useOutletContext } from "react-router-dom";

function DirectorList() {
  const { directors } = useOutletContext();

  return (
    <div>
      <Link to="new">Add Director</Link>

      {directors?.map((d) => (
        <div key={d.id}>
          <Link to={`/directors/${d.id}`}>
            {d.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DirectorList;