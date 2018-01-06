import React from 'react';
import {
  Modal,
  Level,
  LevelLeft,
  LevelRight,
  LevelItem,
  Subtitle
} from 'bloomer'
import AboutModalContent from './AboutModalContent'

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutModal: false
    }
    this.onQuestionIconClick = this.onQuestionIconClick.bind(this);
    this.onEscPress = this.onEscPress.bind(this);
    this.onDeleteIconClick = this.onDeleteIconClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscPress, false);
  }

  onEscPress(e) {
    if (e.keyCode === 27) {
      this.setState({showAboutModal: false});
    }
  }

  onQuestionIconClick(e) {
    this.setState({
      showAboutModal: !this.state.showAboutModal
    });
  }

  onDeleteIconClick(e) {
    this.setState({showAboutModal: false});
  }

  render() {
    return (<div>
      <Level>
        <LevelLeft>
          <LevelItem>
            <Subtitle tag='p' isSize={2}>
              <strong>oblique strategies</strong>
            </Subtitle>
          </LevelItem>
        </LevelLeft>
        <LevelRight>
          <LevelItem>
            <a href="#" onClick={this.onQuestionIconClick}>
              <i className="fa fa-question-circle fa-2x" aria-hidden="true"></i>
            </a>
            {'\u00A0'}
            {'\u00A0'}
            <a href="#" onClick={this.props.onPaintIconClick}>
              <i className="fa fa-paint-brush fa-2x" aria-hidden="true"></i>
            </a>
            {'\u00A0'}
            {'\u00A0'}
            <a href="#" onClick={this.props.onFontIconClick}>
              <i className="fa fa-font fa-2x" aria-hidden="true"></i>
            </a>
            {'\u00A0'}
            {'\u00A0'}
            <a href="#" onClick={this.props.onShuffleIconClick}>
              <i className="fa fa-random fa-2x" aria-hidden="true"></i>
            </a>
          </LevelItem>
        </LevelRight>
      </Level>
      <Modal isActive={this.state.showAboutModal}>
        <AboutModalContent hideAboutModal={this.onDeleteIconClick}/>
      </Modal>
    </div>);
  }
}
