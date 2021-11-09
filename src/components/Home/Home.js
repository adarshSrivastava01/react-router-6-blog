import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>We are Home. We are PSG 🎉</h1>
      <Link to="new-team">New Team</Link>
      <Outlet />
    </main>
  );
}

export default Home;
