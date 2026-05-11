import { Outlet } from "react-router-dom";

const initialDirectors = [
  {
    id: 1,
    name: "Christopher Nolan",
    movies: [
      {
        id: "m1",
        title: "Inception",
        duration: "148 minutes",
        genres: "Sci-Fi, Thriller",
      },
    ],
  },
];

function DirectorContainer() {
  const directors = initialDirectors;

  const addDirector = () => {};
  const addMovie = () => {};

  return (
    <div>
      <h2>Directors</h2>

      <Outlet
        context={{
          directors,
          addDirector,
          addMovie,
        }}
      />
    </div>
  );
}

export default DirectorContainer;