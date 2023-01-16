import React, { useState } from "react";
import Dice from "../Dice/Dice";
import { FaUserEdit } from "react-icons/fa";

import EditProfile2 from "../EditProfile2/EditProfile2";
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
  setName2,
  setGender2,
  name2,
  gender2,
}) => {
  const [dice, setDice] = useState({
    dice1: "six",
    score: 0,
  });
  const roll = () => {
    const newDice = sides[Math.floor(Math.random() * sides.length)];
    const newScore = Object.values(newDice);
    setDice({
      dice1: Object.keys(newDice),
      score: newScore[0] + score,
    });
    setDisable2(true);
    setPass2(true);
    setDisable(false);
    setHide2(false);
    setHide(true);
  };
  const { dice1, score } = dice;
  setScore2(score);

  return (
    <div>
      <div className="roll-dice">
        <div className="flex items-center justify-between">
          <h1 className={hide ? "hidden" : "mb-5 text-xl "}>
            {" "}
            {name2 ? `${name2}'s` : "Player-2's"} turn
          </h1>
          <label htmlFor="RollDice2">
            <FaUserEdit className={hide ? "hidden" : "mb-5 ml-2"}></FaUserEdit>
          </label>
        </div>
        <div className="roll-dice-container mb-5 ml-5">
          <Dice diceValue={String(dice1)}></Dice>
        </div>
        <button
          className="btn btn-outline"
          onClick={roll}
          disabled={pass ? `${disable2 ? "disabled" : ""}` : `disabled`}
        >
          {"Roll Dice"}
        </button>
        <h2 className="mt-5 font-bold">
          {" "}
          {name2 ? `${name2}'s` : "Player-2's"} score is : {score}
        </h2>
      </div>
      {
        <EditProfile2
          setName2={setName2}
          setGender2={setGender2}
        ></EditProfile2>
      }
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
