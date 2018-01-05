import React from 'react'
import {Container, Box} from 'bloomer'
import Strategy from './Strategy'

export default class StrategyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontFamily: "default"
    }
  }
  render() {
    return (<Container>
      <Box>
        <Strategy/>
      </Box>
    </Container>)
  }
}
