import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>We are Home. We are PSG 🎉</h1>
      <Routes>
        <Route path="new-team" element={<h1>Hola, We are Barcelona</h1>} />
      </Routes>
    </main>
  );
}

export default Home;
