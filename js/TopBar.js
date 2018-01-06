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
    this.questionIconClickHandler = this.questionIconClickHandler.bind(this);
    this.escPressHandler = this.escPressHandler.bind(this);
    this.deleteIconClickHandler = this.deleteIconClickHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escPressHandler)
  }

  escPressHandler(e) {
    if (e.keyCode === 27) {
      this.setState({showAboutModal: false});
    }
  }

  questionIconClickHandler(e) {
    this.setState({
      showAboutModal: !this.state.showAboutModal
    });
  }

  deleteIconClickHandler(e) {
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
            <a href="#" onClick={this.questionIconClickHandler}>
              <i className="fa fa-question-circle-o fa-2x" aria-hidden="true"></i>
            </a>
            {'\u00A0'}
            {'\u00A0'}
            <i className="fa fa-square-o fa-2x" aria-hidden="true"></i>
            {'\u00A0'}
            {'\u00A0'}
            <i className="fa fa-font fa-2x" aria-hidden="true"></i>
            {'\u00A0'}
            {'\u00A0'}
            <i className="fa fa-random fa-2x" aria-hidden="true"></i>
          </LevelItem>
        </LevelRight>
      </Level>
      <Modal isActive={this.state.showAboutModal}>
        <AboutModalContent hideModal={this.deleteIconClickHandler}/>
      </Modal>
    </div>);
  }
}
