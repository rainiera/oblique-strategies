import React from 'react'
import Container from 'bloomer'
import TopBar from './TopBar'
import StrategyCard from './StrategyCard'
import strategies from './StrategyList'
import {fontFamilies, classNames} from './StyleConstants'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textStyle: {
        fontFamily: fontFamilies[0]
      },
      backgroundClassName: classNames[0],
      strategyIdx: Math.floor(Math.random() * strategies.length)
    }
    this.onPaintIconClick = this.onPaintIconClick.bind(this);
    this.onFontIconClick = this.onFontIconClick.bind(this);
    this.onShuffleIconClick = this.onShuffleIconClick.bind(this);
    this.sectionClassNames = ['hero', 'is-medium', 'is-fullheight', 'is-bold'];
  }

  onPaintIconClick(e) {
    let currBackgroundClassNameIdx = classNames.indexOf(this.state.backgroundClassName);
    console.log(currBackgroundClassNameIdx);
    this.setState({
      backgroundClassName: classNames[(currBackgroundClassNameIdx + 1) % classNames.length]
    });
  }

  onFontIconClick(e) {
    var currFontFamilyIdx = fontFamilies.indexOf(this.state.textStyle['fontFamily']);
    console.log('toggling font to ' + currFontFamilyIdx);
    this.setState({
      textStyle: {
        fontFamily: fontFamilies[(currFontFamilyIdx + 1) % fontFamilies.length]
      }
    });
  }

  onShuffleIconClick(e) {
    this.setState({
      strategyIdx: Math.floor(Math.random() * strategies.length)
    });
  }

  render() {
    console.log(this.state.backgroundClassName)
    return (<section className={this.sectionClassNames.concat(this.state.backgroundClassName).join(' ')}>
      <div className={'hero-body'}>
        <div className={'container'}>
          <TopBar
            onPaintIconClick={this.onPaintIconClick}
            onFontIconClick={this.onFontIconClick}
            onShuffleIconClick={this.onShuffleIconClick} />
          <StrategyCard
            textStyle={this.state.textStyle}
            strategyIdx={this.state.strategyIdx} />
        </div>
      </div>
    </section>)
  }
}
