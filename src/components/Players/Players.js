import { Link } from "react-router-dom";

const Players = ({ players }) => {
  return (
    <section>
      <h1>The Amazing Players</h1>
      <ul>
        {players.map((player) => (
          <li>
            <Link to={`/players/${player.playerId}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Players;
