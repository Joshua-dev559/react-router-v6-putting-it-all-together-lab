import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

function DirectorForm() {
  const { addDirector } = useOutletContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newDirector = {
      id: Date.now(),
      name,
      movies: [],
    };

    addDirector(newDirector);

    navigate(`/directors/${newDirector.id}`);
  }

  return (
    <div>
      <h2>Add New Director</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Director name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default DirectorForm;