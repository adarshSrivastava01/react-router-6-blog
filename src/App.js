import MainNavigation from "./components/MainNavigation/MainNavigation";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Players from "./components/Players/Players";
import Player from "./components/Player/Player";
import playersData from "./data/dummy";

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/players" exact>
            <Players players={playersData.data} />
          </Route>
          <Route path="/players/:playerId">
            <Player />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
