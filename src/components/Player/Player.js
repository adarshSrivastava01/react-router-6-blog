import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./Player.module.css";
import data from "../../data/dummy";

const Player = () => {
  const params = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    data.data.forEach((player) => {
      if (player.playerId === params.playerId) {
        setPlayer(player);
      } else {
      }
    });
  }, [params.playerId]);

  return (
    <div className={classes.player__card}>
      <h1 className={classes.player__card__heading}>
        Player Id: {params.playerId}
      </h1>
      <h1 className={classes.player__card__heading}>
        Player Name: {player?.name}
      </h1>
      <h1 className={classes.player__card__heading}>
        Player Age: {player?.age}
      </h1>
      <h1 className={classes.player__card__heading}>
        Player Position: {player?.position}
      </h1>
    </div>
  );
};

export default Player;
