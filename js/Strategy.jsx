import React from "react";
import strategies from "./StrategyList"

function getRandStratIdx() {
  return Math.floor(Math.random() * strategies.length)
}

const Strategy = (props) => (strategies[getRandStratIdx()]);

export default Strategy;
