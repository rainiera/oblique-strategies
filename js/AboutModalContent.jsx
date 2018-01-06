import React from 'react'
import {
  Box,
  Delete,
  Media,
  MediaContent,
  MediaRight,
  ModalBackground,
  ModalContent,
  ModalClose
} from 'bloomer'

export default class AboutModalContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <ModalBackground/>
      <ModalContent>
        <Box>
          <Media>
            <MediaContent>
              Oblique Strategies, originally presented as a pack of cards, were
              by Brian Eno and Peter Schmidt. Each Oblique Strategy is a phrase
              or cryptic remark which can be used to break a creative deadlock
              or dilemma situation. This website presents a random Oblique
              Strategy selected from editions 1–5.
              <br/><br/>
              Created by <a href='http://rainier.io/' target='_blank'>Rainier Ababao</a>
            </MediaContent>
            <MediaRight>
              <Delete onClick={this.props.hideAboutModal}/>
            </MediaRight>
          </Media>
        </Box>
      </ModalContent>
    </div>);
  }
}
