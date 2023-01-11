import React, { useState } from "react";
import Dice from "../Dice/Dice";
import { FaUserEdit } from "react-icons/fa";
import EditProfile from "../EditProfile/EditProfile";

const RollDice1 = ({
  sides,
  setPass,
  setDisable,
  setDisable2,
  pass2,
  disable,
  setHide,
  setHide2,
  hide2,
  setScore1,
}) => {
  const [dice, setDice] = useState({
    dice1: "six",
    rolling: false,
    score: 0,
  });
  const updateProfile = () => {
    console.log("update profile");
  };
  const roll = () => {
    const newDice = sides[Math.floor(Math.random() * sides.length)];
    const newScore = Object.values(newDice);
    setDice({
      dice1: Object.keys(newDice),
      rolling: true,
      score: newScore[0] + score,
    });
    setDisable(true);
    setDisable2(false);
    setPass(true);
    setHide(false);
    setHide2(true);
    setTimeout(() => {
      setDice((prevDice) => ({ ...prevDice, rolling: false }), 1000);
    });
  };
  const { dice1, rolling, score } = dice;
  setScore1(score);

  return (
    <div>
      <div className="roll-dice">
        <div className="flex items-center justify-between">
          {" "}
          <h1 className={hide2 ? "hidden" : "mb-5 text-xl "}>
            Player-1 turn
          </h1>{" "}
          <label htmlFor="my-modal-6">
            <FaUserEdit
              onClick={updateProfile}
              className={hide2 ? "hidden" : "mb-5"}
            ></FaUserEdit>
          </label>
        </div>

        <div className="roll-dice-container mb-5 ml-5">
          <Dice diceValue={String(dice1)} rolling={rolling}></Dice>
        </div>
        <button
          className="btn btn-outline"
          onClick={roll}
          // disabled={pass2 ? `${disable ? "disabled" : ""}` : `disabled`}
          disabled={pass2 ? `${disable ? "disabled" : ""}` : `disabled`}
        >
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>
        <h2 className="mt-5 font-bold">Player 1 score is : {score}</h2>
      </div>
      {<EditProfile></EditProfile>}
    </div>
  );
};
RollDice1.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};

export default RollDice1;
