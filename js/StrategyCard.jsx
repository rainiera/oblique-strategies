import React from 'react'
import {Container, Box} from 'bloomer'
import Strategy from './Strategy'

export default function StrategyCard(props) {
  return (<Container>
    <Box>
      <Strategy
        textStyle={props.textStyle}
        strategyIdx={props.strategyIdx} />
    </Box>
  </Container>)
};
