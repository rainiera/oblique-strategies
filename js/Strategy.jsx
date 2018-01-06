import React from "react";
import strategies from "./StrategyList"

export default function Strategy(props) {
  return (<div style={props.textStyle} className={'is-size-4'}>
    {strategies[props.strategyIdx]}
  </div>);
}
