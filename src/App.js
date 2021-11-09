import MainNavigation from "./components/MainNavigation/MainNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home/*" element={<Home />} />
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
