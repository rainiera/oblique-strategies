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

export default function AboutModalContent(props) {
  // Description credit: http://www.joshharrison.net/oblique-strategies/
  return (<div>
    <ModalBackground onClick={props.hideAboutModal}/>
    <ModalContent>
      <Box>
        <Media>
          <MediaContent className={'has-text-justified'}>
            Oblique Strategies, originally presented as a pack of cards, were by
            Brian Eno and Peter Schmidt. Each Oblique Strategy is a phrase or cryptic
            remark which can be used to break a creative deadlock or dilemma situation.
            This website presents a random Oblique Strategy selected from editions 1–5.
            <br/><br/>
            Website by <a href='https://twitter.com/rainieratx' target='_blank'>Rainier</a>{'\u00A0'}
            <a href='https://github.com/rainiera/oblique-strategies' target='_blank'>(source)</a>
          </MediaContent>
          <MediaRight>
            <Delete onClick={props.hideAboutModal}/>
          </MediaRight>
        </Media>
      </Box>
    </ModalContent>
  </div>);
}
