import React, { useState } from "react";
import Dice from "../Dice/Dice";

const RollDice2 = ({ sides }) => {
  const [dice, setDice] = useState({
    dice1: "six",
    rolling: false,
    score: 0,
  });
  const roll = () => {
    const newDice = sides[Math.floor(Math.random() * sides.length)];
    const newScore = Object.values(newDice);
    setDice({
      dice1: Object.keys(newDice),
      rolling: true,
      score: newScore[0] + score,
    });
    setTimeout(() => {
      setDice((prevDice) => ({ ...prevDice, rolling: false }), 1000);
    });
  };
  const { dice1, rolling, score } = dice;
  return (
    <div>
      <div className="roll-dice">
        <div className="roll-dice-container">
          <Dice diceValue={String(dice1)} rolling={rolling}></Dice>
        </div>
        <button onClick={roll} disabled={rolling}>
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>
        <h2>Player 2 score is : {score}</h2>
      </div>
    </div>
  );
};
RollDice2.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};

export default RollDice2;
