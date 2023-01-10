import React, { useState } from "react";
import Dice from "../Dice/Dice";

const RollDice2 = ({
  sides,
  pass,
  setPass2,
  setDisable2,
  disable2,
  setDisable,
  setHide2,
  setHide,
  hide,
  setScore2,
}) => {
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
    setDisable2(true);
    setPass2(true);
    setDisable(false);
    setHide2(false);
    setHide(true);
    setTimeout(() => {
      setDice((prevDice) => ({ ...prevDice, rolling: false }), 1000);
    });
  };
  const { dice1, rolling, score } = dice;
  setScore2(score);
  
  console.log("Pass", pass);
  console.log("disable2", disable2);

  return (
    <div>
      <div className="roll-dice">
        <h1 className={hide ? "hidden" : "mb-5 text-xl "}>Player-2 turn</h1>
        <div className="roll-dice-container mb-5 ml-5">
          <Dice diceValue={String(dice1)} rolling={rolling}></Dice>
        </div>
        <button
          className="btn btn-outline"
          onClick={roll}
          disabled={pass ? `${disable2 ? "disabled" : ""}` : `disabled`}
        >
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>
        <h2 className="mt-5 font-bold">Player 2 score is : {score}</h2>
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
