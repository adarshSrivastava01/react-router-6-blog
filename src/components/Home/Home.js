import { Route } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>We are Home. We are PSG 🎉</h1>
      <Route path="/home/new-team" element={<h1>Hola, We are Barcelona</h1>} />
    </main>
  );
}

export default Home;
