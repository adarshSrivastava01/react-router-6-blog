import MainNavigation from "./components/MainNavigation/MainNavigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Players from "./components/Players/Players";
import Player from "./components/Player/Player";
import playersData from "./data/dummy";

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/players"
            element={<Players players={playersData.data} />}
          />
          <Route path="/players/:playerId" element={<Player />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
