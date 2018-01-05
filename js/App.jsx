import React from 'react'
import Container from 'bloomer'
import TopBar from './TopBar'
import StrategyCard from './StrategyCard'

export default class App extends React.Component {
  render() {
    return (<div>
      <TopBar/>
      <StrategyCard/>
    </div>)
  }
}
