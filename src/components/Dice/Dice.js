import React from "react";
import "./Dice.css";
const Dice = ({ diceValue }) => {
  return <i className={`dice fa-solid fa-dice-${diceValue}`}></i>;
};

export default Dice;
