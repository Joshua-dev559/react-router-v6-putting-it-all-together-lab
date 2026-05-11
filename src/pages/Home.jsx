import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Movie Directory</h1>

      <Link to="/directors">View Directors</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;